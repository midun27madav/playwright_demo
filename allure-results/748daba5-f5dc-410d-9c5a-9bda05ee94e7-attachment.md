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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | //GET
  5  | test('Get Users', async ({ request }) => {
  6  | 
  7  |   const response = await request.get(
  8  |     'https://reqres.in/api/users?page=2',
  9  |     {
  10 |       headers: {
  11 |         'x-api-key': 'reqres-free-v1'
  12 |       }
  13 |     }
  14 |   );
  15 | 
> 16 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  17 | 
  18 |   const body = await response.json();
  19 | 
  20 |   expect(body.page).toBe(2);
  21 | });
  22 | 
  23 | 
  24 |   //POST
  25 | //   test('Create user', async ({ request }) => {
  26 | //   const response = await request.post(
  27 | //     'https://reqres.in/api/users',
  28 | //     {
  29 | //       data: {
  30 | //         name: 'Midun',
  31 | //         job: 'QA Engineer'
  32 | //       }
  33 | //     }
  34 | //   )
  35 | 
  36 | //   expect(response.status()).toBe(201);
  37 | 
  38 | //   const body = await response.json();
  39 | 
  40 | //   expect(body.name).toBe('John');
  41 | //   expect(body.job).toBe('QA Engineer');
  42 | //   })
  43 |   
  44 |   
  45 | //   //PUT
  46 | //   test('Update user', async ({ request }) => {
  47 | //   const response = await request.put(
  48 | //     'https://reqres.in/api/users/2',
  49 | //     {
  50 | //       data: {
  51 | //         name: 'Sumiya',
  52 | //         job: 'Lead QA'
  53 | //       }
  54 | //     }
  55 | //   )
  56 | 
  57 | //   expect(response.ok()).toBeTruthy();
  58 | 
  59 | //   const body = await response.json();
  60 | 
  61 | //   expect(body.name).toBe('Mike');
  62 | // });
  63 | 
```