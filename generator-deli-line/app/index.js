'use strict';
var chalk = require('chalk');
var path = require('path');
var spawn = require('child_process').spawn;
var util = require('util');
var yeoman = require('yeoman-generator');

 
var DeliLineGenerator = yeoman.generators.Base.extend({
  scaffoldFolders: function () {
    this.mkdir("app");
    this.mkdir("app/assets");
    this.mkdir("app/data");
    this.mkdir("app/sass");
    this.mkdir("app/scripts");
    this.mkdir("app/templates");
    this.mkdir("app/vendor");

    this.mkdir("htdocs");
    this.mkdir("node_modules");
    this.mkdir("tmp");

    this.log("\nScaffold secured!\n");
  },

  copyMainFiles: function () {
    this.copy("_bower.json", "bower.json");
    this.copy("_gruntfile.js", "Gruntfile.js");
    this.copy("_package.json", "package.json");

    this.copy("bowerrc", ".bowerrc");
    this.copy("editorconfig", ".editorconfig");
    this.copy("jshintrc", ".jshintrc");

    this.log("Files finished!\n");
  },

  copyAssets: function () {
    this.directory("app/assets/fonts");
    this.directory("app/assets/images");

    this.log("Assets assembled!!!!!");
  },

  copyData: function () {
    this.directory("app/data");

    this.log("Data done!!!!!!!!!!!!!");
  },

  copyFavicons: function () {
    this.directory("app/favicons", "app");
    this.copy("app/browserconfig.xml");

    this.log("Data done!!!!!!!!!!!!!");
  },

  copySCSS: function () {
    this.directory("app/sass");

    this.log("SCSS success!!!!!!!!!!!");
  },

  copyScripts: function () {
    this.directory("app/scripts");

    this.log("Scripts sent!!!!!!!!!!!!");
  },

  copyTemplates: function () {
    this.directory("app/templates");

    this.log("Templates ...!!!!!!!!!!!!");
  },

  copyFinished: function () {
    this.log("\nOrder up!\n");
  },

  installDependencies: function () {
    this.npmInstall();
    this.bowerInstall();
  },

  finished: function () {
    this.log("Deli Line's delivered");
  }
});
 
module.exports = DeliLineGenerator;