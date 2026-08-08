# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handleframe.spec.js >> frames
- Location: tests\Handleframe.spec.js:3:1

# Error details

```
TypeError: Cannot read properties of null (reading 'locator')
```

# Test source

```ts
  1  | const { test, expect } = require ('@playwright/test')
  2  | 
  3  | test('frames', async({page})=>{
  4  |     await page.goto('https://ui.vision/demo/webtest/frames/')
  5  | 
  6  | //     // console.log(page.frames().map(frame => frame.url()))
  7  | 
  8  | //     //total frames
  9  | //     // const totalFrames = await page.frames()
  10 | //     // console.log("No. of frames: ",totalFrames.length)
  11 | 
  12 |     //1.Using name||url
  13 |     const frame_1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
> 14 |     await frame_1.locator('input[name="mytext1"]').fill("Hello Class")
     |                   ^ TypeError: Cannot read properties of null (reading 'locator')
  15 | 
  16 | //     //2.Using locator
  17 | //     const input = await page.frameLocator('frame[src="frame_1.html"]').locator('input[name="mytext1"]')
  18 | //     await input.fill("Welcome Class")
  19 | //     await page.waitForTimeout(4000)
  20 |  })
  21 | 
  22 | 
  23 | // test('Nested frames', async({page})=>{
  24 | //     await page.goto('https://ui.vision/demo/webtest/frames/');
  25 | 
  26 | //       // Go to Frame 3
  27 | //     const frame3 = page.frameLocator('frame[src="frame_3.html"]');
  28 | //     await frame3.locator('input[name="mytext3"]').fill("I'm Sumiya");
  29 | 
  30 | //     // Go to nested Google Form iframe
  31 | //     const nestedFrame = frame3.frameLocator('iframe');
  32 |     
  33 | //     await nestedFrame.getByRole('button',{ name: 'Next'}).click();
  34 | //     await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('Sumiya');
  35 | //   //await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a short text' }).fill('Sumiya');
  36 | //   //await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('Sumiya Banu');
  37 | //   await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('textbox', { name: 'Enter a long answer' }).fill('Sumiya Banu');
  38 | //   await page.waitForTimeout(5000)
  39 | //   await page.getBy
  40 | // });
  41 | 
  42 | 
```