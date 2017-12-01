# TAF-JS Nightwatch
Code base for nightwatch.js with selenium

Original Framework is from https://github.com/nightwatchjs/nightwatch

Nightwatch documentation http://nightwatchjs.org/
## Install

First you need to install Node.js (https://nodejs.org/en/) and Java.

Then...

```sh
$ git clone <url>
$ cd ktaf-js
$ npm install
$ npm run e2e-setup

```

## Run Tests

Run all tests

```sh
$ npm test
```
Run specific test suite (eg: home.js suite)

```sh
$ npm test --tests tests/home.js
```

# Folders structure

## tests
(configured in nightwatch.json file)

This is the placeholder of all your test suites. Nightwatch will scan all files in this folder and run all test cases that were defined in the suites.
```js
  import login from '../test-cases/login/';

  const loginSuite = {
    'Login Success': login.loginSuccess,
    'Login Fail': login.loginFail,
  };
  export default loginSuite;

```
## test-cases
Contains your test cases. Each feature would be place in a specific folder. Eg: All test cases of "Login" feature should be put in the "login" folder nested under "test-cases' folder.
- The "index.js" contains all your test cases
- The "hook.js" contains hook functions (before, beforeEach, etc)
## page-objects
(configured in nightwatch.json file)

Nightwatch will scan all files in the root of this folder and add them to its list of page objects at runtime.

The simple template of a page object:
```js
import elements from './login/elements';
// list of base commands will be used across page objects
import baseCommands from './base/commands'; 
// list of commands of this page object
import commands from './login/commands';

export default {
  commands: [baseCommands, commands], // list of commands 
  elements, // list of elements or properties 
  url: function() { // url of the page object 
    return this.api.launchUrl;
  },
};

```
## page-objects/components
Contains the common components (menu, datagrid, etc) that will be reused in multiple page objects
## common 
This folder contains common stuffs including: constants, helpers, messages, etc.

## test-data
Put your test data here
## report 
(configured in nightwatch.json file)

Nighwatch will output the test reports to this folder 


