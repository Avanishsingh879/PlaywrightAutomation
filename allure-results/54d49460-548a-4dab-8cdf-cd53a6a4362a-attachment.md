# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FileUpload.spec.js >> verify upload file
- Location: tests\FileUpload.spec.js:3:5

# Error details

```
Error: locator.setInputFiles: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[name=\'upfile\']')

```

# Test source

```ts
  1  | import{test,expact} from "playwright/test"
  2  | 
  3  | test('verify upload file',async({browser})=>{
  4  | 
  5  |         const context=await browser.newContext({
  6  | 
  7  |             viewport:{width:1980,height:1020}
  8  |         })
  9  | 
  10 |         const page=await context.newPage();
  11 |         await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");
  12 |         await page.waitForTimeout(5000);
  13 |         const element1 = page.locator("//input[name='upfile']");
> 14 |         await element1.setInputFiles("C:/Users/Avanish/OneDrive/Desktop/Testjava.png");
     |         ^ Error: locator.setInputFiles: Target page, context or browser has been closed
  15 |         await page.locator("input[value='Press']").click();
  16 |         await page.waitForTimeout(5000);
  17 | 
  18 | })
```