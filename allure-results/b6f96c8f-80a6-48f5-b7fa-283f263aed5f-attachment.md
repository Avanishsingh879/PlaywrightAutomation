# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: class.spec.js >> verify login test
- Location: tests\class.spec.js:3:5

# Error details

```
TypeError: page.goto is not a function
```

# Test source

```ts
  1  | import{test,expect}from "@playwright/test"
  2  | 
  3  | test('verify login test',async({browser})=>{
  4  | 
  5  |     const context= await browser.newContext({
  6  | 
  7  |         viweport:{width:1980,height:1020}
  8  |     })
  9  | 
  10 |     const page=context.newPage();
> 11 |       await page.goto("http://localhost:8888/") ;  
     |                  ^ TypeError: page.goto is not a function
  12 |        
  13 | 
  14 | 
  15 | })
  16 | 
  17 | 
  18 | 
```