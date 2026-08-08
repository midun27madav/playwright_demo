const { expect } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;

        this.loginMenu = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.locator("//button[text()='Log in']");
        this.welcomeText = page.locator('#nameofuser');
    }

    async openLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html')
        await this.loginMenu.click();
    }

    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    async verifyLogin() {
        await expect(this.welcomeText).toBeVisible();
    }
}

module.exports = { LoginPage };