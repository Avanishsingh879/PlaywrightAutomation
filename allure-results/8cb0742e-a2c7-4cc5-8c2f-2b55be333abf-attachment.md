# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_Multiplewindow.spec.js >> verifyTest
- Location: tests\Handle_Multiplewindow.spec.js:5:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[@id=\'windowButton\']')

```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test'
  2  | import { log } from 'console';
  3  | import { promises } from 'dns';
  4  | 
  5  | test('verifyTest', async ({ browser }) => {
  6  | //Set viewport zise.
  7  |   const context = await browser.newContext({
  8  |     viewport: { width: 1920, height: 1080 }
  9  |   });
  10 | 
  11 |    const page=await context.newPage();
  12 |    await page.goto('https://www.testmuai.com/selenium-playground/window-popup-modal-demo/');
  13 |    await page.waitForTimeout(1000); 
> 14 |    const[newPage]=await Promise.all([context.waitForEvent("page"),page.locator("//button[@id='windowButton']").click()])
     |                                                                                                                ^ Error: locator.click: Target page, context or browser has been closed
  15 |    const text=await newPage.locator("//h1[text()='This is a sample page']").textContent();
  16 |    console.log(text);
  17 |    await newPage.waitForTimeout(1000);
  18 | 
  19 | 
  20 | });
  21 | 
```