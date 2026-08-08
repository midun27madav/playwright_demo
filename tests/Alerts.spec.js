import {test, expect} from "@playwright/test"

test('Simple Alert', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog =>{
        //verify dialog type
        expect(dialog.type()).toBe('alert')
        //verify alert message
        expect(dialog.message()).toBe("I am an alert box!")
        //accept the alert
        await dialog.accept()
    })
    await page.locator('//button[text()="Simple Alert"]').click()

})


// test('Confirmation Alert', async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     page.on('dialog', async dialog =>{
//         //verify dialog type
//         expect(dialog.type()).toBe('confirm')
//         //verify alert message
//         expect(dialog.message()).toBe("Press a button!")
//         //reject the alert
//         await dialog.dismiss()
//     })
//     await page.locator('//button[text()="Confirmation Alert"]').click()
//     await expect(page.locator('p#demo')).toHaveText('You pressed Cancel!')

// })



test('Prompt Alerts', async({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/')
     page.on('dialog', async dialog =>{
        //verify dialog type
        expect(dialog.type()).toBe('prompt')
        //verify alert message
        expect(dialog.message()).toBe("Please enter your name:")
        //accept the alert
        await dialog.accept('Sumiya')
    })
    await page.locator('//button[text()="Prompt Alert"]').click()
    await expect(page.locator('#demo')).toContainText('Hello Sumiya! How are you today?')
})