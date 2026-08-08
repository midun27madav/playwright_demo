import {test, expect} from "@playwright/test"

test('Multiple locators',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page
    .getByRole("textbox")
    .and(page.getByPlaceholder("Enter Name"))
    .fill('Midun')

    await page.locator("input").first().fill("Midun")
     await page.locator("input").last().click()
        await page.locator("input").nth(35).toBeTruthy()
})


//and()
//or()
//filter()
//last()
//first()
//nth(index)