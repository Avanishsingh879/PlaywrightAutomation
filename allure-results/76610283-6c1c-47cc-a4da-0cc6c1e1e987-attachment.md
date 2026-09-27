# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\GetRequest1.spec.js >> Validate Get Request
- Location: tests\API\GetRequest1.spec.js:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
```

# Test source

```ts
  1  | import{test,expect,request} from "@playwright/test"
  2  | //https://jsonplaceholder.typicode.com/posts/1
  3  | 
  4  | test('Validate Get Request',async({request})=>{
  5  | 
  6  |        const Res=request.get('https://jsonplaceholder.typicode.com/posts/1');
> 7  |        expect((await Res).status).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  8  |        
  9  | 
  10 | })
  11 | 
```