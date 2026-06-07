const {BasePage} = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.dashboardheader = page.getByRole('heading',{name : 'Dashboard'})
    this.invalidusernameerrortext= page.locator('//div[@role="alert"]/div/p')
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
  async getDashboardHeader(){
    return await this.dashboardheader.textContent();
  }
  async getInvalidLoginErrorText(){
    await this.waitForLocator(this.invalidusernameerrortext);
    return await this.invalidusernameerrortext.textContent();
  }
}

module.exports = { LoginPage };