// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByPlaceholder() to locate an input by placeholder.


// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
// page.getByLabel() to locate a form control by associated label's text.

import { test, expect } from '@playwright/test';

test('Built-in Locators', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  // await page.getByAltText("company-branding")

  // page.getByPlaceholder() to locate an input by placeholder.
  await page.getByPlaceholder("Username").fill("standard_user")
  //await page.locator("//input[@placeholder='Password']")
  await page.getByPlaceholder("Password").fill("secret_sauce")

// page.getByRole() to locate by explicit and implicit accessibility attributes.

await page.locator("input#login-button").click()
await page.locator('div[class="dkjMxf kssMZb iPFm3e MVbbRb tSl2vc"]').d


// page.getByText() to locate by text content.

// await expect(page.getByText("Dashboard")).toBeVisible()

})