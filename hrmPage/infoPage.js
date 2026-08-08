export class infoPage {

    constructor(page) {
        this.page = page;

        this.myInfo = '//span[text()="My Info"]';
        this.firstName = '//input[@name="firstName"]';
    }

    async personaldetails(firstName) {
        await this.page.locator(this.myInfo).click();

        await this.page.waitForLoadState('networkidle');

        await this.page.locator(this.firstName).clear();
        await this.page.locator(this.firstName).fill(firstName);
    }
}