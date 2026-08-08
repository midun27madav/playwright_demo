# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotations.spec.js >> Test4
- Location: tests\Annotations.spec.js:30:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 7
Received: 1
```

# Test source

```ts
  1  | import {test, expect}from'playwright/test'
  2  | 
  3  | 
  4  | //only()
  5  | 
  6  | // test.only('Test1', async({page})=>{
  7  | //     tag : ['@only']
  8  | //     console.log("This is Test case 1.")
  9  | // })
  10 | 
  11 | 
  12 | //skip()
  13 | 
  14 | // test('Test2', async({page, browserName})=>{
  15 | //     if(browserName==="firefox"){
  16 | //         test.skip()
  17 | //     }
  18 | //     console.log("This is Test case 2.")
  19 | // })
  20 | 
  21 | 
  22 | //fixme()
  23 | 
  24 | // test.fixme('Test3', async({page})=>{
  25 | //     console.log("This is Test case 3.")
  26 | // })
  27 | 
  28 | 
  29 | //fail()
  30 | test.fail('Test4', async({page})=>{
  31 |     console.log("This is Test case 4.")
> 32 |     expect(1).toBe(7)
     |               ^ Error: expect(received).toBe(expected) // Object.is equality
  33 | })
  34 | 
  35 | //slow()
  36 | 
  37 | test.slow('Test5', async({page})=>{
  38 |     console.log("This is Test case 5.")
  39 | })
```