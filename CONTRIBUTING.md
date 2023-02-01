# Contributing

For documentation changes, you can just edit and make a pull request. Ignore the instructions below.

## Setup

1. Asking to join as a contributor is simplest. You can fork, but you will have to change lines in your `.env` file and may have to set GitHub secrets in your repository. You have to talk to us either way.
1. Clone the repository locally.
1. Run `npm install`
1. Create your `.env` file at the root of the project.
1. Contact @plocket to get important information for your `.env` file.
1. Run `npm run setup`

Advanced contributors: If you're going to work on our docassemble internal testing interviews, do so as a contributor on this repository. Avoid forking if you can. The reasons are complex.

## PRs

Before making a pull request

1. Search issues to see if what you are thinking of has been discussed yet.
1. Make an issue about the change you are thinking of.
1. Assing yourself to an issue.
1. Make a new branch.
1. Make your edits. Feel free to run tests as you go.
1. When you're ready to push
   1. Run `npm run test` to make sure your code passes all our tests.
   1. Make an entry in the `CHANGELOG.md` describing your change.
   1. AVOID changing the version number. We'll do that after merging your changes.
   1. If needed, update the `README.md` (e.g. the cheat sheet section) and/or `CONTRIBUTING.md` docs. Changes to our architecture might require editing `CONTRIBUTING.md`.
1. Push to GitHub.
1. Wait for the GitHub tests to pass. You may have to re-run failing tests - server restarts or race conditions may interfere with them. We have reduced them greatly, but some are impossible to avoid.
1. Make your pull request.

## .env

You need to make your own `.env` file. It contains sensitive variables, like passwords. We use them for our internal tests. The file should look something like the below:

```
# For everyone

DOCASSEMBLE_DEVELOPER_API_KEY=<ask @plocket>
SERVER_URL=https://apps-dev.suffolklitlab.org
REPO_URL=https://github.com/SuffolkLITLab/alkiln
SERVER_RELOAD_TIMEOUT_SECONDS=
MAX_SECONDS_FOR_SETUP=

# For internal tests

# Set DEBUG to 1 to run in non-headless mode and see the test run live
DEBUG=
BRANCH_PATH=v4
USER1_EMAIL=<ask @plocket>
USER1_PASSWORD=<ask @plocket>
SECRET_VAR1=secret-var1-value
SECRET_VAR2=secret-var2-value
SECRET_FOR_MISSING_FIELD=secret for missing field
SECRET_INVALID_THERE_IS_ANOTHER=invalid value for there_is_another
```

## Running internal tests
Make the code available to test on the docassemble server:
```
npm run setup
```
To be able to keep running tests on the same code, avoid takedown.

Use the syntax below to trigger all tests (cucumber and unit tests):
```
npm run test
```

Run only cucumber tests:
```
npm run cucumber

# To test Features or Scenarios specific tags:
npm run cucumber -- "--tags" "@tagname"
```

To run the unit tests in isolation:
```
npm run unit
```

When done you want to test a new branch or internal test interview files have been updated, clean up before setting up again:
```
npm run takedown
```

# Very general architecture of files and folders

An honest look at our current project architecture - some of our files and folders, what they do, and how they interact.

## Logic architecture

### .feature files

The `.feature` files are written in Gherkin, a syntax cucumber uses. The "code" in there relies on the functions set up in `./lib/steps.js`.

```js
// The test_something.feature file step
Then I sign

// relies on the code in steps.js
Then('I sign', { timeout: -1 }, async () => {
  return wrapPromiseWithTimeout(
    scope.steps.sign( scope ),
    scope.timeout
  );
});
```

### steps.js

`./lib/steps.js` defines all the Gherkin sentences that our users (the developers) can write. See [cucumber documentation on defining steps](https://cucumber.io/docs/cucumber/step-definitions/?lang=javascript). We sometimes use "cucumber expressions" and, but often use regular expressions as we often want to be more flexible about the user's input.

The file handles things like:
* Creating state
* Defining steps for the users/developers
* Defining steps for internal testing, like testing for appropriate errors and error messages
* Finishing a Scenario
* Finishing all tests

### scope.js

`./lib/steps.js` makes heavy use of `./lib/scope.js`, where most of the action happens. We have decided to mostly keep it in one file to avoid bouncing back and forth between files.

Many `./lib/steps.js` steps make use of the `scope.steps` object. It is there to avoid duplicating code between steps.

The file hanldes things like:
* Finding form fields on a page
* Filling out form fields
* Generating random data for form fields
* Waiting for pages to load
* Checking for server restarts
* Generating test report content

## Logging

`./lib/utils/log.js` takes care of logging information of various kinds (normal, debug, error) to the console in ways we find useful. We should probably find a logging library instead, but this is what we have for now. An important feature is that it ensures the messages clearly belong to ALKiln and not to some other process.

## session_vas.js

The `./lib/utils/session_var.js` file keeps track of what you might otherwise think of as environment variables. We like to think of them as constants, but some of them do need go through functions, so for consistency we get them all through functions. Also because it was easier to test them when they are functions.

## Setup and takedown logic

All of the setup and takedown logic is in the `./lib/docassemble` directory. Not a great name. It is named after the docassemble API code that is in there. Also, setup and takedown interact very closely with docassemble and the docassemble server.

Other files also use the docassemble API functions, so this folder is in a bit of a messy position.

## Bash commands

Our `./package.json` uses the code in the `script` directive to setup, run, and takedown tests. We are working on converting this to a command line tool to avoid some complexity in GitHub actions, increase security, and align more with what this framework has grown into. (TODO: Define this better)

## GitHub composite action

Our `./action.yml` is a [composite action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action). The users/developers let it do most of the work for them. It installs npm, installs our repo, then uses our repo to set up the tests, run the tests, generate and save reports, errors, and screenshots, and clean up the tests.

## Internal cucumber test interviews

To run internal integrated tests, our repository itself includes a docassemble project. Most of its files are in the `./docassemble` directory. There are other files it needs, like `./setup.py`. This is what gets pulled into the docassemble server when the internal cucumber tests are run.
```
npm run cucumber
```

Those tests are the `.feature` files stored in `./docassemble/ALKilnTests/data/sources`.

Our unit tests use chai for assertions. They are in `./tests/unit_tests` and their filenames end in `.test.js`. The fixtures for the tests are also contained in that folder and end in `.fixtures.js`.

Instructions for running tests should be near the top of this document.

## Files that you don't need to look at

`index.js` and `world.js` don't really matter. `./lib/utils/langs.js` used to work, but we're not sure it does anymore. No one has used it yet, so we're waiting to experiment until someone expresses a need or we have some extra time.

# Footnotes

[1] To be clear, our framework is a misuse of cucumberjs. cucumberjs is geared towards behavior driven development. We try to make BDD available to our developers, but it's not always possible and not necessarily our goal.