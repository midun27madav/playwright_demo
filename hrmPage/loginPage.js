import { expect } from '@playwright/test';

export class loginPage {

    constructor(page) {
        this.page = page;

        this.logo = 'img[alt="company-branding"]';
        this.username = '//input[@placeholder="Username"]';
        this.password = '//input[@placeholder="Password"]';
        this.loginbtn = '//button[@type="submit"]';
    }

    async gotopage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(this.page.locator(this.logo)).toBeVisible();
    }

    async login(username, password) {
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginbtn).click();
    }
}