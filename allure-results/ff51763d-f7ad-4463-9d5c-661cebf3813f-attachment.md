# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APItesting.spec.js >> GET Posts
- Location: tests\APItesting.spec.js:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 20
Received: 200
```

# Test source

```ts
  1   | 
  2   | //GET
  3   | import { test, expect } from '@playwright/test';
  4   | 
  5   | test('GET Posts', async ({ request }) => {
  6   | 
  7   |     const response = await request.get(
  8   |         'https://jsonplaceholder.typicode.com/posts'
  9   |     );
  10  | 
> 11  |     expect(response.status()).toBe(20);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  12  | 
  13  |     const body = await response.json();
  14  | 
  15  |     console.log(body);
  16  | 
  17  |     expect(body.length).toBeGreaterThan(0);
  18  | 
  19  |     expect(body[0].id).toBe(1);
  20  | 
  21  | });
  22  | 
  23  | //   //POST
  24  | // test('Create Post', async ({ request }) => {
  25  | 
  26  | //     const response = await request.post(
  27  | //         'https://jsonplaceholder.typicode.com/posts',
  28  | //         {
  29  | //             data: {
  30  | //                 title: 'Playwright',
  31  | //                 body: 'API Testing',
  32  | //                 userId: 1
  33  | //             }
  34  | //         }
  35  | //     );
  36  | 
  37  | //     expect(response.status()).toBe(201);
  38  | 
  39  | //     const body = await response.json();
  40  | 
  41  | //     expect(body.title).toBe('Playwright');
  42  | 
  43  | //     expect(body.userId).toBe(1);
  44  | 
  45  | // });
  46  |   
  47  |   
  48  | // //   //PUT
  49  | // test('Update Post', async ({ request }) => {
  50  | 
  51  | //     const response = await request.put(
  52  | //         'https://jsonplaceholder.typicode.com/posts/1',
  53  | //         {
  54  | //             data: {
  55  | //                 id: 1,
  56  | //                 title: 'Updated Title',
  57  | //                 body: 'Updated Body',
  58  | //                 userId: 1
  59  | //             }
  60  | //         }
  61  | //     );
  62  | 
  63  | //     expect(response.ok()).toBeTruthy();
  64  | 
  65  | //     const body = await response.json();
  66  | 
  67  | //     expect(body.title).toBe('Updated Title');
  68  | 
  69  | // });
  70  | 
  71  | 
  72  | // //PATCH
  73  | // test('Patch Post', async ({ request }) => {
  74  | 
  75  | //     const response = await request.patch(
  76  | //         'https://jsonplaceholder.typicode.com/posts/1',
  77  | //         {
  78  | //             data: {
  79  | //                 title: 'Patched Title'
  80  | //             }
  81  | //         }
  82  | //     );
  83  | 
  84  | //     expect(response.ok()).toBeTruthy();
  85  | 
  86  | //     const body = await response.json();
  87  | 
  88  | //     expect(body.title).toBe('Patched Title');
  89  | 
  90  | // });
  91  | 
  92  | 
  93  | 
  94  | // //DELETE
  95  | // test('Delete Post', async ({ request }) => {
  96  | 
  97  | //     const response = await request.delete(
  98  | //         'https://jsonplaceholder.typicode.com/posts/1'
  99  | //     );
  100 | 
  101 | //     expect(response.status()).toBe(200);
  102 | 
  103 | // });
  104 | 
  105 | 
  106 | /*
  107 | 
  108 | API Testing     
  109 |         ->Application Programming Interface
  110 |         ->Acts as a medium btw 2 applications
  111 | 
```