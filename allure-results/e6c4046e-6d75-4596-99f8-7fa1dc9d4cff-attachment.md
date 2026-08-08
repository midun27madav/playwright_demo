# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotations.spec.js >> Test1
- Location: tests\Annotations.spec.js:6:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Test source

```ts
  1  | import {test, expect}from'playwright/test'
  2  | 
  3  | 
  4  | //only()
  5  | 
  6  | test('Test1', async({page})=>{
> 7  |     test.only()
     |          ^ Error: Playwright Test did not expect test() to be called here.
  8  |     console.log("This is Test case 1.")
  9  | })
  10 | 
  11 | test('Test2', async({page})=>{
  12 |     console.log("This is Test case 2.")
  13 | })
  14 | 
  15 | test('Test3', async({page})=>{
  16 |     console.log("This is Test case 3.")
  17 | })
  18 | 
  19 | test('Test4', async({page})=>{
  20 |     console.log("This is Test case 4.")
  21 | })
  22 | 
  23 | test('Test5', async({page})=>{
  24 |     console.log("This is Test case 5.")
  25 | })
```