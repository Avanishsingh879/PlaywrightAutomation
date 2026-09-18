# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTestScript2.spec.js >> verify sales Page
- Location: tests\LoginTestScript2.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://localhost:8888/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test('verify sales Page',async({browser})=>{
  4  | 
  5  |       const context= await browser.newContext({
  6  | 
  7  |          viewport:{width:1980,height:1020}
  8  | 
  9  | 
  10 |        })
  11 | 
  12 |        
  13 |   const page=await context.newPage();
> 14 |         await page.goto("http://localhost:8888/");
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  15 |         
  16 | 
  17 | 
  18 | 
  19 | 
  20 | 
  21 | })
```