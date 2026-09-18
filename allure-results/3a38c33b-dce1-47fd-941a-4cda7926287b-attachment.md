# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_Multiplewindow.spec.js >> verifyTest
- Location: tests\Handle_Multiplewindow.spec.js:4:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('//span[text()=\'See more from TestMu AI\'][1]')

```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test'
  2  | import { log } from 'console';
  3  | 
  4  | test('verifyTest', async ({ browser }) => {
  5  | //Set viewport zise.
  6  |   const context = await browser.newContext({
  7  |     viewport: { width: 1920, height: 1080 }
  8  |   });
  9  | 
  10 |    const page=await context.newPage();
  11 |    await page.goto('https://www.testmuai.com/selenium-playground/window-popup-modal-demo/');
  12 |    await page.waitForTimeout(1000);
  13 |    await page.locator("//a[text()='Like us On Facebook']").click();
  14 |    await page.waitForTimeout(6000);
> 15 |    const text=await page.locator("//span[text()='See more from TestMu AI'][1]").textContent();
     |                                                                                 ^ Error: locator.textContent: Target page, context or browser has been closed
  16 |    console,log(text);
  17 | 
  18 | 
  19 | });
  20 | 
```