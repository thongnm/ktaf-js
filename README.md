# KTAF-JS Nightwatch
Code base for nightwatch.js with selenium

Original Framework is from https://github.com/nightwatchjs/nightwatch

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
