#!/usr/bin/env node

const da_i = require('./docassemble_api_interface');
const log = require('../utils/log');
const session_vars = require('../utils/session_vars' );
const files = require('../utils/files' );


const setup = async () => {
  /* In the docassemble testing account identified by the
  *   DOCASSEMBLE_DEVELOPER_API_KEY secret, create a new Project,
  *   pull code into that project, and, if needed, wait for the
  *   server to restart. */

  if ( session_vars.just_test_interview_list() !== null ) {
    await create_interview_list_feature_file();
  } else {
    await pull_package_to_playground();
  }

  // log.info({ type: `setup`, pre: `Starting to upload this package to `
  //   + `a new Project in the server's testing account.` });

  // // Check that API key is valid. Will error if it is invalid.
  // // Should the error be thrown here?
  // await da_i.validate_api_key();

  // // Create a project on the da server's account with a unique name then
  // // store it locally for later deleting the project. 
  // let project_name = await da_i.loop_to_create_project();
  // // Once the name is created, save that name to a local file.
  // session_vars.save_project_name( project_name );

  // // Pull code and wait for server restart to finish if needed
  // let task_id = await da_i.pull();
  // // Task id will be null if server did not need to restart
  // if ( task_id ) {
  //   await da_i.wait_for_server_to_restart( task_id );
  // }

  // Finish
  log.info({ type: `setup`, pre: `Success! Test setup has finished successfully.` });
};  // Ends setup();


const create_interview_list_feature_file = async () => {
  /* Create a .feature file with a Scenario for each interview on the given server.
  *    Each Scenario just tries to load the interview. */
  log.info({
    type: `setup`,
    pre: `Validating the docassemble user's API key for the server ${ session_vars.get_da_server_url() }.`
  });

  // Check that API key is valid. Will error if it is invalid.
  await da_i.validate_api_key();

  log.info({
    type: `setup`,
    pre: `Getting the list of interviews on the ${ session_vars.get_da_server_url() } server.`
  });

  // Get the urls for all interviews
  let urls = await da_i.get_interview_urls();

  // Create the text of the Feature file with a Scenario for each interview to test
  let file_text = `Feature: load all interviews\n`
  for ( let name of urls ) {
    file_text += `\nScenario: load ${ name }\n`;
    file_text += `  Given I start the interview at "${ name }"\n`;
  }

  // Create the text file
  log.info({
    type: `setup`,
    pre: `Creating the test file.`
  });
  fs.writeFileSync( `load_each_interview.feature`, file_text );

  // // Finish
  // log.info({ type: `setup`, pre: `Success! Interview list test file has been created.` });
};  // Ends create_interview_list_feature_file()


const pull_package_to_playground = async () => {
  /* In the docassemble testing account identified by the
  *   DOCASSEMBLE_DEVELOPER_API_KEY secret, create a new Project,
  *   pull code into that project, and, if needed, wait for the
  *   server to restart. */

  log.info({ type: `setup`, pre: `Starting to upload this package to `
    + `a new Project in the server's testing account.` });

  // Check that API key is valid. Will error if it is invalid.
  // Should the error be thrown here?
  await da_i.validate_api_key();

  // Create a project on the da server's account with a unique name then
  // store it locally for later deleting the project. 
  let project_name = await da_i.loop_to_create_project();
  // Once the name is created, save that name to a local file.
  session_vars.save_project_name( project_name );

  // Pull code and wait for server restart to finish if needed
  let task_id = await da_i.pull();
  // Task id will be null if server did not need to restart
  if ( task_id ) {
    await da_i.wait_for_server_to_restart( task_id );
  }
};  // Ends pull_package_to_playground()


setup();
