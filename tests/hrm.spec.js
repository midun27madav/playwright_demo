import { test } from '@playwright/test';
import { loginPage } from '../hrmPage/loginPage.js'
import { infoPage } from '../hrmPage/infoPage.js'

test('OrangeHRM My Info Test', async ({ page }) => {

    // Login
    const login = new loginPage(page);

    await login.gotopage();
    await login.login('Admin', 'admin123');

    // My Info
    const home = new infoPage(page);

    await home.personaldetails('John');

    await page.waitForTimeout(3000);

});