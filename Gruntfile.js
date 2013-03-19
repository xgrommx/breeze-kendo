/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      version: '<%= pkg.version %>',
      banner: 
        '// Breeze-Kendo\n' +
        '// ------------\n' + 
        '// v<%= pkg.version %>\n' +
        '//\n' + 
        '// Copyright (c)<%= grunt.template.today("yyyy") %> Telerik. All Rights Reserved.\n' +
        '// Distributed under Apache 2.0 license\n' +
        '//\n' + 
        '// http://kendoui.com\n' +
        '\n'
    },

    lint: {
      files: ['src/*.js']
    },

    preprocess: {
      build: {
        files: {
          'build/kendo.breeze.datasource.js' : 'src/kendo.breeze.datasource.js'
        }
      }
    },

    concat: {
      options: {
        banner: "<%= meta.banner %>"
      },
      build: {
        src: 'build/kendo.breeze.datasource.js',
        dest: 'build/kendo.breeze.datasource.js'
      }
    },

    uglify : {
      options: {
        banner: "<%= meta.banner %>"
      },
      build: {
        src : 'build/kendo.breeze.datasource.js',
        dest : 'build/kendo.breeze.min.js',
        options : {
          sourceMap : 'build/kendo.breeze.map',
          sourceMappingURL : 'kendo.breeze.map',
          sourceMapPrefix : 2,
        }
      }
    },

    jasmine : {
      options : {
        helpers : 'specs/helpers/*.js',
        specs : 'specs/*.spec.js',
        vendor : [
          'vendor/jquery.js',
          'vendor/underscore.js',
          'vendor/breeze.js',
          'vendor/kendo.all.min.js'
        ],
      },
      coverage : {
        src : '<%= jasmine.build.src %>',
        options : {
          template : require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'reports/coverage.json',
            report: 'reports/coverage'
          }
        }
      },
      build: {
        src : [
          'src/kendo.breeze.datasource.js',
          'src/*.js'
        ]
      }
    },

    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      build: [ 'src/*.js' ]
    },
    plato: {
      build : {
        src : 'src/**/*.js',
        dest : 'reports',
        options : {
          jshint : grunt.file.readJSON('.jshintrc')
        }
      }
    },
    watch: {
      build : {
        files : ['src/*.js', 'specs/*.js'],
        tasks : ['jshint', 'jasmine:build']
      },
      server: {
        files : ['src/*.js', 'specs/*.js'],
        tasks : ['jasmine:build:build']
      }
    },

    connect: {
      server: {
        options: {
          port: 8888
        }
      }
    }
  });

  // load plugins

  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-plato');

  // register tasks
  
  grunt.registerTask('default', ['jshint', 'jasmine:coverage', 'preprocess', 'concat', 'uglify']);
  grunt.registerTask('test', ['jshint', 'jasmine:build']);
  grunt.registerTask('dev', ['test', 'watch:build']);
  grunt.registerTask('server', ['jasmine:build:build', 'connect:server', 'watch:server']);

};
