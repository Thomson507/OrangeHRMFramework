class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigateToUrl(url)
{
    await this.page.goto(url);
}
async getPageTitle(){
    return await this.page.title();
}

async waitForLocator(locator){
    await locator.waitFor({state:'visible'});
}

}

module.exports = {BasePage};