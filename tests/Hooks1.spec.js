import {test, expect}from'playwright/test'

test("HomePage test", async ({page})=>{
    await page.goto("https://www.demoblaze.com/")
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[text()="Log in"]').click()
    //HomePage
    const products = await page.locator('.hrefch')
    expect(products).toHaveCount(9)
    //Logout
    await page.locator("#logout2").click()
})

test("Add Product to cart test", async ({page})=>{
    await page.goto("https://www.demoblaze.com/")
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[text()="Log in"]').click()

    //Add product to cart
    
    await page.locator('//a[text()="Nokia lumia 1520"]').click()
    await page.locator('//a[text()="Add to cart"]')

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
    })

    //Logout
    await page.locator("#logout2").click()
})