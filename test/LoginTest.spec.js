const {test,expect}= require('../fixtures/Loginfixtures');
const logindata = require('../testdata/logindata.json');

test.describe('Login Tests', () => {
  test('Valid Login Test', async ({ loginPage }) => {
    await loginPage.login(logindata.validuser.username, logindata.validuser.password);
    const dashBoardtext = await loginPage.getDashboardHeader();
    expect(dashBoardtext).toBe(logindata.dashboardText);
    console.log(dashBoardtext);
  });
  test('Invalid Login test ', async({loginPage})=>{
    await loginPage.login(logindata.invaliduser.username,logindata.invaliduser.password);
    const invalidLoginErrorText = await loginPage.getInvalidLoginErrorText();
    await expect(invalidLoginErrorText).toBe(logindata.invalidLoginErrorText);
    console.log(invalidLoginErrorText);
  })
});
