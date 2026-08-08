# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APItesting.spec.js >> Get Users
- Location: tests\APItesting.spec.js:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | 
  2  | //GET
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('Get Users', async ({ request }) => {
  6  |   const response = await request.get(
  7  |     'https://reqres.in/api/users?page=2',
  8  |     {
  9  |       headers: {
  10 |         'x-api-key': 'reqres-free-v1'
  11 |       }
  12 |     }
  13 |   );
  14 | 
  15 |   console.log(await response.text());
  16 | 
> 17 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  18 | });
  19 | 
  20 |   //POST
  21 | //   test('Create user', async ({ request }) => {
  22 | //   const response = await request.post(
  23 | //     'https://reqres.in/api/users',
  24 | //     {
  25 | //       data: {
  26 | //         name: 'Midun',
  27 | //         job: 'QA Engineer'
  28 | //       }
  29 | //     }
  30 | //   )
  31 | 
  32 | //   expect(response.status()).toBe(201);
  33 | 
  34 | //   const body = await response.json();
  35 | 
  36 | //   expect(body.name).toBe('John');
  37 | //   expect(body.job).toBe('QA Engineer');
  38 | //   })
  39 |   
  40 |   
  41 | //   //PUT
  42 | //   test('Update user', async ({ request }) => {
  43 | //   const response = await request.put(
  44 | //     'https://reqres.in/api/users/2',
  45 | //     {
  46 | //       data: {
  47 | //         name: 'Sumiya',
  48 | //         job: 'Lead QA'
  49 | //       }
  50 | //     }
  51 | //   )
  52 | 
  53 | //   expect(response.ok()).toBeTruthy();
  54 | 
  55 | //   const body = await response.json();
  56 | 
  57 | //   expect(body.name).toBe('Mike');
  58 | // });
  59 | 
```