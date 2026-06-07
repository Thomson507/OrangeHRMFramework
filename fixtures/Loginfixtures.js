const base = require('@playwright/test');
const { LoginPage } = require('../pagesource/LoginPage');


const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToUrl('/web/index.php/auth/login');  
    await use(loginPage);
  },
});

module.exports = { test, expect: base.expect };
