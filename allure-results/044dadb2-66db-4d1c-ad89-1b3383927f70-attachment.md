# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\PostRequest.spec.js >> POST API request
- Location: tests\API\PostRequest.spec.js:3:5

# Error details

```
Error: apiRequestContext.post: getaddrinfo ENOTFOUND api.example.com
Call log:
  - → POST https://api.example.com/users
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
    - content-length: 42

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('POST API request', async ({ request }) => {
> 4  |   const response = await request.post('https://api.example.com/users', {
     |                                  ^ Error: apiRequestContext.post: getaddrinfo ENOTFOUND api.example.com
  5  |     data: {
  6  |       name: 'John',
  7  |       email: 'john@example.com'
  8  |     },
  9  |     headers: {
  10 |       'Content-Type': 'application/json'
  11 |     }
  12 |   });
  13 | 
  14 |   expect(response.ok()).toBeTruthy();
  15 | 
  16 |   const body = await response.json();
  17 |   console.log(body);
  18 | });
```