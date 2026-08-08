# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hooks3.spec.js >> HomePage test
- Location: tests\Hooks3.spec.js:14:5

# Error details

```
ReferenceError: page is not defined
```

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import {test, expect}from'playwright/test'
  2  | 
  3  | test.beforeAll(async ({browser})=>{
  4  |      page= await browser.newPage()
  5  |     await page.goto("https://www.demoblaze.com/")
  6  |     //Login
  7  |     await page.locator('#login2').click()
  8  |     await page.locator('#loginusername').fill("pavanol")
  9  |     await page.locator('#loginpassword').fill('test@123')
  10 |     await page.locator('//button[text()="Log in"]').click()
  11 | })
  12 | 
  13 | 
  14 | test("HomePage test", async ()=>{
  15 |     const products = await page.locator('//h4[@class="card-title"]')
  16 |     expect(products).toHaveCount(9)
  17 | })
  18 | 
  19 | test("Add Product to cart test", async ()=>{
  20 |     await page.click('//a[text()="Nokia lumia 1520"]')
  21 |     await page.locator('//a[text()="Add to cart"]').click()
  22 | 
  23 |     page.on('dialog', async dialog=>{
  24 |         expect(dialog.message()).toBe('Product added.')
  25 |         await dialog.accept()
  26 |     })
  27 | 
  28 | })
  29 | 
  30 | test.afterAll(async ()=>{
  31 |     //Logout
> 32 |     await page.locator("#logout2").click()
     |     ^ ReferenceError: page is not defined
  33 | })
```