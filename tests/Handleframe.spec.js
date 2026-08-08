const { test, expect } = require ('@playwright/test')

test('frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

//     // console.log(page.frames().map(frame => frame.url()))

//     //total frames
//     // const totalFrames = await page.frames()
//     // console.log("No. of frames: ",totalFrames.length)

    //1.Using name||url
    const frame_1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'})
    await frame_1.locator('input[name="mytext1"]').fill("Hello Class")

//     //2.Using locator
//     const input = await page.frameLocator('frame[src="frame_1.html"]').locator('input[name="mytext1"]')
//     await input.fill("Welcome Class")
//     await page.waitForTimeout(4000)
 })


// test('Nested frames', async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/');

//       // Go to Frame 3
//     const frame3 = page.frameLocator('frame[src="frame_3.html"]');
//     await frame3.locator('input[name="mytext3"]').fill("I'm Sumiya");

//     // Go to nested Google Form iframe
//     const nestedFrame = frame3.frameLocator('iframe');
    
//     await nestedFrame.getByRole('button',{ name: 'Next'}).click();
//     await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('Sumiya');
//   //await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('Sumiya');
//   //await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('Sumiya Banu');
//   await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('Sumiya Banu');
//   await page.waitForTimeout(5000)
//   await page.getBy
// });

