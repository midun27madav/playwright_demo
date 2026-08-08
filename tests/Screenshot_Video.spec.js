import {test, expect} from "@playwright/test"

//Screenshots

test('Page screenshot', async ({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage1.png'})
})


test('Full page screenshot', async ({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage: true})
     
})


// test('Element screenshot', async ({page})=>{
//      await page.goto("https://www.demoblaze.com/")
//     await page.getByTitle("iPhone").screenshot({path:'tests/screenshots/'+Date.now()+'Image.png'})
    
// })

//Video