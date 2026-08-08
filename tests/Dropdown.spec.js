import {test, expect} from '@playwright/test'

test('Static dropdown', async ({page})=>{
    await page.goto("https://www.amazon.in/a/addresses/add?ref=ya_address_book_add_button")
    //await page.locator("select#country").selectOption({label: "Australia"})
     await page.locator('select[name="address-ui-widgets-enterAddressStateOrRegion"]').click()

    await page.locator('select[name="address-ui-widgets-enterAddressStateOrRegion"]').fill("pu")
    await page.getByText("PUNJAB").click()

    await expect(page.locator('select[name="address-ui-widgets-enterAddressStateOrRegion"]')).toHaveValue("PUNJAB")

})

// test("Multiple dropdown", async ({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator("select#colors").selectOption([
//         { label: "Red"},
//         {index: 1},
        
//     ])
//     const selected = await page.locator("select#colors option:checked").count()
//     console.log(selected)
//     await expect(page.locator("select#colors option:checked")).toHaveCount(2)
// })

// import { test, expect } from '@playwright/test';

// test('Multi Select Dropdown', async ({ page }) => {

//     await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

//     // Select multiple options
//     await page.locator('#multi-select').selectOption([
//         { label: 'California' },
//         { label: 'Florida' },
//         { label: 'New Jersey' }
//     ]);

//     // Verify selected options count
//     const selected = await page.locator('#multi-select option:checked').count();
//     console.log("Selected Options:", selected);

//     await expect(page.locator('#multi-select option:checked')).toHaveCount(3);
// });