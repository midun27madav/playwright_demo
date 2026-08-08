# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots\HandleFrame.spec.js >> Nested frames
- Location: tests\screenshots\HandleFrame.spec.js:22:1

# Error details

```
TypeError: frame3.frameLocator(...).nth(...).contentFrame is not a function
```

# Test source

```ts
  1  | const { test, expect } = require ('@playwright/test')
  2  | 
  3  | // test('frames', async({page})=>{
  4  | //     await page.goto('https://ui.vision/demo/webtest/frames/')
  5  | 
  6  | //     console.log(page.frames().map(frame => frame.url()))
  7  | 
  8  | //     //total frames
  9  | //     const totalFrames = await page.frames()
  10 | //     console.log("No. of frames: ",totalFrames.length)
  11 | 
  12 | //     //1.Using name||url
  13 | //     // const frame_1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
  14 | //     // await frame_1.locator('input[name="mytext1"]').fill("Hello World")
  15 | 
  16 | //     //2.Using locator
  17 | //     const input = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
  18 | //     await input.fill("Welcome Class")
  19 | //  })
  20 | 
  21 | 
  22 | test('Nested frames', async({page})=>{
  23 |     await page.goto('https://ui.vision/demo/webtest/frames/')
  24 | 
  25 |     const frame3 = await page.frameLocator('frame[src="frame_3.html"]').locator('input[name="mytext3"]')
  26 |     await frame3.fill("I'm Midun")
  27 | //await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click()
> 28 |     const childFrames = await frame3.frameLocator('frame').nth(2).contentFrame('Loading...')
     |                                                                   ^ TypeError: frame3.frameLocator(...).nth(...).contentFrame is not a function
  29 |     await childFrames.contentFrame().getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click()
  30 | })
```