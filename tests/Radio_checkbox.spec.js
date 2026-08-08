import {test, expect} from '@playwright/test'

test('Radio button',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('input#male').click()
    await expect(page.locator('input#male')).toBeChecked()
    await expect(page.locator('input[value="female"]')).not.toBeChecked()
})