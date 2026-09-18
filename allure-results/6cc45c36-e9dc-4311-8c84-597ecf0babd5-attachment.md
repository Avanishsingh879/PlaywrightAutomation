# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hover.spec.js >> Verify Hover
- Location: tests\Hover.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demoqa.com/browser-windows", waiting until "load"

```

# Test source

```ts
  1  | import{test,except} from '@playwright/test'
  2  | 
  3  | test('Verify Hover',async({browser})=>{
  4  | 
  5  | const context=await browser.newContext({
  6  | 
  7  |  viewport:{ width:1980,height:1080}
  8  | });
  9  | 
  10 |     const page=await context.newPage();
> 11 |     await page.goto('https://demoqa.com/browser-windows');
     |                ^ Error: page.goto: Target page, context or browser has been closed
  12 |     await page.screenshot({ path:'./TestFailData/Test.png'});
  13 |     ///////////scroll////////////
  14 |     await page.locator("//button[@id='windowButton']").scrollIntoViewIfNeeded();///scrolling
  15 |     const pagePromise = context.waitForEvent('page');
  16 | 
  17 |     await page.locator("//button[@id='windowButton']").click();
  18 | 
  19 |     await page.waitForTimeout(8000);
  20 |    const newpage= await pagePromise;
  21 |    const textLocator =await newpage.locator("//h1[text()='This is a sample page']");
  22 |    
  23 |    console.log("Test:"+ textLocator);
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | });
  33 | 
  34 | 
```