# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewWindows.spec.js >> Handle New Browser Window
- Location: tests\NewWindows.spec.js:3:5

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Handle New Browser Window', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://testautomationpractice.blogspot.com/');
  6  | 
  7  |   // Wait for the new window and click the button
  8  |   const [newPage] = await Promise.all([
> 9  |     page.waitForEvent('popup'),
     |          ^ Error: page.waitForEvent: Target page, context or browser has been closed
  10 |     page.locator("//button[normalize-space()='New Browser Window']").click()
  11 |   ]);
  12 | 
  13 |   // Wait until the new page loads
  14 |   await newPage.waitForLoadState();
  15 | 
  16 |   // Print the title
  17 |   console.log(await newPage.title());
  18 | 
  19 |   // Assertion
  20 |   await expect(newPage).toHaveTitle(/Selenium/);
  21 | 
  22 |   // Close the new window
  23 |   await newPage.close();
  24 | 
  25 |   // Verify the original page is still open
  26 |   await expect(page).toHaveTitle(/Automation Testing Practice/);
  27 | });
```