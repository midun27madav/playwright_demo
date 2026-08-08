# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Pomtest.spec.js >> test
- Location: tests\Pomtest.spec.js:7:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class LoginPage {
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  | 
  8  |         this.loginMenu = page.locator('#login2');
  9  |         this.username = page.locator('#loginusername');
  10 |         this.password = page.locator('#loginpassword');
  11 |         this.loginButton = page.locator("//button[text()='Log in']");
  12 |         this.welcomeText = page.locator('#nameofuser');
  13 |     }
  14 | 
  15 |     async openLoginPage() {
> 16 |         await this.page.goto('https://www.demoblaze.com/index.html')
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  17 |         await this.loginMenu.click();
  18 |     }
  19 | 
  20 |     async login(user, pass) {
  21 |         await this.username.fill(user);
  22 |         await this.password.fill(pass);
  23 |         await this.loginButton.click();
  24 |     }
  25 | 
  26 |     async verifyLogin() {
  27 |         await expect(this.welcomeText).toBeVisible();
  28 |     }
  29 | }
  30 | 
  31 | module.exports = { LoginPage };
```