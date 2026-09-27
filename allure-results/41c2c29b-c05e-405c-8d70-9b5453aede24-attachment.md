# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandleFrame1.spec.js >> Handled Iframe
- Location: tests\HandleFrame1.spec.js:6:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//h1[text()=\'My First JavaScript\']//following-sibling::button')

```

# Test source

```ts
  1  | ////https://www.w3schools.com/js/
  2  | 
  3  | /////Hamdled Frame/////
  4  | 
  5  | import{test,expect} from "@playwright/test"
  6  | test('Handled Iframe',async({browser})=>{
  7  | 
  8  |       const context=await browser.newContext({
  9  | 
  10 |         viewport:{width:1980,height:1020}
  11 |       })
  12 | 
  13 |       const page=await context.newPage();
  14 |       await page.goto("https://www.w3schools.com/js");
  15 |       console.log("Browser Launch");
  16 |       ///////////ScrollDown///////////////////
  17 |       const links=await page.locator("//a[text()='Try it Yourself »']");
  18 |       const scroll=links.scrollIntoViewIfNeeded();
  19 |       const[newPage]=await Promise.all([context.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
  20 |       await newPage.waitForTimeout(1000);
  21 |       const frame=newPage.frameLocator('iframe[name="iframeResult"]');
> 22 |       await newPage.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();
     |                                                                                              ^ Error: locator.click: Target page, context or browser has been closed
  23 |       await newPage.waitForTimeout(1000);
  24 | 
  25 | })
```