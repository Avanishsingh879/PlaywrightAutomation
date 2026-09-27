# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\GetRequest.spec.js >> Validate Get Request
- Location: tests\API\GetRequest.spec.js:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 200
```

# Test source

```ts
  1  | import{test,expect,request} from "@playwright/test"
  2  | 
  3  | test('Validate Get Request',async({request})=>{
  4  | 
  5  |           const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
> 6  |           expect(response.status()).toBe(201);
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  7  | 
  8  |           const responsebody=await response.json();
  9  |           expect(responsebody.id).toBe(1);
  10 | })
```