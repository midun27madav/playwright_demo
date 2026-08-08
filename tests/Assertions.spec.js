/*  import {test, expect}from'playwright/test'

 test('assertion',async({page})=>{
     await page.goto('https://www.saucedemo.com/')

//     //1.Page level assertion
//     Verify page title
   await expect(page).toHaveTitle('Swags Labs')


//     //Verify page URL
     await expect(page).toHaveURL('https://www.saucedemo.com/')

//     //2.Element level assertion
//     //Locate username and password
    const usernameInput = await page.locator('#user-name')
     const passwordInput = await page.locator('#password')

//     //Verify input field username and password are visible
     await expect(usernameInput).toBeVisible()
     await expect(passwordInput).toBeVisible()

//     //Verify if webElement are enabled and editable
     await expect(usernameInput).toBeEnabled()
    await expect(passwordInput).toBeEnabled()

     await expect(usernameInput).toBeEditable()
   await expect(passwordInput).toBeEditable()

//     //Attribute Assertion
//     //3. Text and value assertion
  await usernameInput.fill('standard_user')
    await expect(usernameInput).toHaveText("")
     await passwordInput.fill('secret_sauce')
     await expect(passwordInput).toHaveValue('secret_sauce')

    await page.waitForTimeout(4000)
 })  */

import {test, expect} from "@playwright/test"
test('Non-retrying', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const title= await page.title()
    expect(title).toContain('Automation')

    const url= await page.url()
     expect(url).toBe('https://testautomationpractice.blogspot.com/')

     await page.locator('#male').check()
     expect(await page.locator('#male').isChecked()).toBe(true)
})

//toBeContain
//toHaveText
//toHaveUrl
//toBe