# ALKiln
Integrated automated end-to-end testing with docassemble, puppeteer, cucumber, and chai.

Works well with https://github.com/suffolklitlab/docassemble-AssemblyLine but isn't
dependent on it.

Formerly named "docassemble-cucumber"

## Documentation
Read about how to use this framework at https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/automated_integrated_testing/.

## Installation

This is [Code for Boston](https://www.codeforboston.org/) project or [Suffolk LIT lab team](https://suffolklitlab.org/).  Please join group and group communication for admin to help  to set up your environment and to set for development. 

## Setting up the environment file

>DOCASSEMBLE_DEVELOPER_API_KEY=<required, please talk to project lead>
>SERVER_URL=https://apps-dev.suffolklitlab.org
>REPO_URL=https://github.com/plocket/docassemble-ALAutomatedTestingTests
>BRANCH_PATH=main
>USER1_EMAIL=<same as your suffolk account email>
>USER1_PASSWORD=<same as your suffolk password>
>SECRET_VAR1=secret-var1-value
>SECRET_VAR2=secret-var2-value
>SECRET_FOR_MISSING_FIELD=secret for missing field
>SECRET_INVALID_THERE_IS_ANOTHER=invalid value for there_is_another
>DEBUG=
>DOCASSEMBLE_DEVELOPER_API_KEY=<required, please talk to project lead>

## Set up 
To setup for the integration tests, create the project on the server:
```
npm run setup
```

## Integration Tests
Use the syntax below to trigger specific tags:
```
npm run cucumber -- "--tags" "@tagname"
```

To run the unit tests in isolation:
```
npm run unit
```
To run a complete set of tests before merging: 
```
npm run tests
```

## Take Down 
When complete:
```
npm run takedown
```

## More resources 

