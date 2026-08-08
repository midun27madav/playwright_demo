# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Pomtest.spec.js >> test
- Location: tests\Pomtest.spec.js:7:5

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | exports.HomePage = class HomePage{
  2  | 
  3  |     constructor(page){
  4  |         this.page = page
  5  |         this.productList = '//div[@id="tbodyid"]/div//h4/a'
  6  |         this.addtoCartbutton = '//a[text()="Add to cart"]'
  7  |         this.cartbutton = '#cartur'
  8  |     }
  9  | 
  10 |     async addProductToCart(productName){
  11 |         const productList = await this.page.$$(this.productList)
  12 |         for (const product of productList){
  13 |             if (productName === await product.textContent()){
  14 |                 await product.click()
  15 |                 break
  16 |             }
  17 |          }
  18 |          const [dialog] = await Promise.all([
  19 |             this.page.waitForEvent('dialog'),
  20 |             this.page.locator(this.addtoCartbutton).click()
  21 |          ])
> 22 |          expect(dialog.message()).toBe("Product added.")
     |          ^ ReferenceError: expect is not defined
  23 |          await dialog.accept()
  24 |          
  25 |        
  26 |          
  27 |     }
  28 | 
  29 |     async gotoCart(){
  30 |         await this.page.locator(this.cartbutton).click()
  31 | 
  32 |     }
  33 | }
```