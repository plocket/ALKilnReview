const { setWorldConstructor } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const scope = require('./scope');
const files = require(`./utils/files`);
const session_vars = require(`./utils/session_vars`);

const World = function() {
  scope.driver = puppeteer;
  scope.context = {};

  // Make the folder to store all the files for this run of the tests
  let artifacts_path = files.make_artifacts_folder();
  // Save its name in a file. `session_vars` can get it back later.
  // The value we are saving is used by at least run_cucumber.js.
  session_vars.save_artifacts_path_name( artifacts_path );
};

setWorldConstructor( World );