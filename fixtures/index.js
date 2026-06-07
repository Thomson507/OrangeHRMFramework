const {mergeTests, expect} = require('@playwright/test');

const {test : loginTest} = require('./Loginfixtures');

const test = mergeTests(loginTest);


module.exports = {test, expect};