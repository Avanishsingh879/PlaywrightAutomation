# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: class.spec.js >> test login
- Location: tests\class.spec.js:4:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@name=\'user_name\']')

```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | test('test login',async({browser})=>{
  5  | 
  6  |     const context=await browser.newContext({
  7  | 
  8  |         viewport:{width:1980,height:1020}
  9  |     })
  10 | 
  11 |       
  12 | const page=await context.newPage();
  13 | 
  14 | await page.goto("https://www.google.com");
> 15 | await page.locator("//input[@name='user_name']").fill('admin');
     |                                                  ^ Error: locator.fill: Target page, context or browser has been closed
  16 | await page.locator("//input[@name='user_password']").fill('admin');
  17 | 
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | })
  36 |          
  37 | 
  38 | 
  39 | 
  40 |          
  41 | 
  42 | 
```