import { test, expect } from '@playwright/test';

//usingfill

// test('Select date using fill', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');

//   await page.locator('input#datepicker').fill('07/21/2026');

//   await expect(page.locator('input#datepicker')).toHaveValue('07/21/2026');
// });

// //this month

// test('Select date from current month', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // Open calendar
//     await page.locator('input#datepicker').click();

//     // Select date 20
//     await page.locator('//a[text()="31"]').click();

// });


test('Select future date', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const year = "2027";
    const month = "July";
    const date = "17";

    await page.locator('input#datepicker').click();

    while (true) {

        const currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent();
        const currentYear = await page.locator('[class="ui-datepicker-year"]').textContent();

        if (currentMonth === month && currentYear === year) {
            break;
        }

        await page.locator('[class="ui-icon ui-icon-circle-triangle-e"]').click();
    }

    await page.locator(`//a[text()='${date}']`).click();

});


// test('Select previous date', async ({ page }) => {

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const year = "2023";
//     const month = "March";
//     const date = "15";

//     await page.locator('#datepicker').click();

//     while (true) {

//         const currentMonth = await page.locator(".ui-datepicker-month").textContent();
//         const currentYear = await page.locator(".ui-datepicker-year").textContent();

//         if (currentMonth === month && currentYear === year) {
//             break;
//         }

//         await page.locator(".ui-datepicker-prev").click();
//     }

//     await page.locator(`//a[text()='${date}']`).click();

// });






