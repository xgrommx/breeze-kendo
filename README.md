# Breeze-Kendo

Sample projects and extensions to integrate
[Kendo UI](http://kendoui.com) with 
[Breeze.js](http://brezejs.com)

## About Breeze-Kendo

Breeze.js provides an abstraction for managing and workign with
remote data sources via AJAX and other calls.

## Source Code and Downloads

All of source code can be found in the [src](src) folder of the
repository.

### Downloads

  * Unminified (devevelopment version): [kendo.breeze.js](https://raw.github.com/kendo-labs/breeze-kendo/master/build/web/kendo.breeze.js)
  * Minified (production version): [kendo.breeze.min.js](https://raw.github.com/kendo-labs/breeze-kendo/master/build/web/kendo.breeze.min.js)
  * Source map (production debugging): [kendo.breeze.map](https://raw.github.com/kendo-labs/breeze-kendo/master/build/web/kendo.breeze.map)

## Documentation

Coming soon!

I wrote a blog post on [wrapping a kendo.data.DataSource around Breeze.js](http://www.kendoui.com/blogs/teamblog/posts/13-02-21/breeze_js_and_the_kendo_ui_datasource.aspx).

## Compatibility and Requirements

Breeze-Kendo is designed to work with Kendo UI's web control
suite at this point, with additional support for the Kendo UI framework
that supports the web controls. Additional work to include integration
with Kendo UI Mobile is also in the works.

The Breeze-Kendo extension currently depend on the 
following libraries:

* [jQuery](http://www.jquery.com) v1.8.x
* [Kendo UI](http://www.kendoui.com) v2013.1.226
* [Breeze.js](http://breezejs.com) v...
* [UnderscoreJS](http://underscorejs.org) v1.4.4

These extensions have not been tested against any other versions of 
these libraries. You may find that versions other than these are 
compatible, but we make no claims to support those version, 
nor can we troubleshoot issues that arise when using those 
versions.

### Running The Specs And Builds

Breeze-Kendo relies on [NodeJS](http://nodejs.org) and [GruntJS](http://gruntjs.com) for it's build and test
process. Once you have [downloaded NodeJS](http://nodejs.org/download/) and
installed it, run the following commands from a command prompt or
terminal window, in the project folder:

1. `npm install`
2. `npm install -g grunt-cli`
3. `grunt`

If the first two steps were successful, you should see the build
output from the GruntJS build process.

If you wish to run the specs in development mode for continuous
testing, you can use one of the following commands:

`grunt watch`

or

`grunt server`

The `grunt watch` command will start a PhantomJS server and run
all specs in the console window. The `grunt server` command will
start an instance of the "grunt-contrib-connect" web server and
host the specs at 
[http://localhost:8888/\_SpecRunner.html](http://localhost:888/_SpecRunner.html).

## How to Contribute

If you would like to contribute to Breeze-Kendo's source code, 
please read the 
[guidelines for pull requests and contributions](CONTRIBUTING.md). 
Following these guidelines will help make your contributions easier 
to bring in to the next release.

## Getting Help

The best way to get help is either by open [issues](issues) on the project
here at github, or by asking questions on
[StackOverflow](http://stackoverflow.com). Be sure to tag your SO
questions with [kendo-ui](http://stackoverflow.com/questions/tagged/kendo-ui) 
and [breeze](http://stackoverflow.com/questions/tagged/breeze) so that we'll see them!

As a part of Kendo UI Labs, Breeze-Kendo is intended to be a 
community-run project, and not an official part of any 
Kendo UI SKU (Web, DataViz, Mobile or Complete). As such, this 
project is not a supported part of Kendo UI, and is not covered 
under the support agreements for Kendo UI license holders. Please 
do not create Kendo UI support requests for this project, as these 
will be immediately closed and you'll be directed to post your 
question on a community forum.

## Release Notes

For change logs and release notes, see the [changelog](changelog.md) file.

## License Information

This project has been released under the 
[Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html), 
the text of which is included in the [LICENSE.md](LICENSE.md) file. 
This license applies ONLY to the project-specific source of each 
repository and does not extend to Kendo UI itself, or any other 3rd 
party libraries used in a repository. For licensing information about 
Kendo UI, see the 
[License Agreements page](https://www.kendoui.com/purchase/license-agreement.aspx) 
at [KendoUI.com](http://www.kendoui.com).
