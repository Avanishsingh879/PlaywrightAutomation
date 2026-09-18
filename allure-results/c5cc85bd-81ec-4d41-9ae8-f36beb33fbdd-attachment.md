# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_Frame.spec.js >> Handles Frame
- Location: tests\Verify_Frame.spec.js:6:5

# Error details

```
Error: locator.click: selector: expected string, got object
```

# Test source

```ts
  1  | //https://www.w3schools.com/js/
  2  | 
  3  | import { console } from "inspector";
  4  | import{test,expect} from "playwright/test"
  5  | 
  6  | test('Handles Frame',async({browser})=>{
  7  | 
  8  |           const context=await browser.newContext({
  9  | 
  10 |             viewport:{width:1980,height:1020}
  11 |           })
  12 | 
  13 |           const page=await context.newPage();
  14 |           await page.goto("https://www.w3schools.com/js/");
  15 |           await page.waitForTimeout(2000);
  16 |           const links=await page.locator("//a[text()='Try it Yourself »']");
  17 |           await links.scrollIntoViewIfNeeded();
  18 |           links.click();
  19 |           page.waitForTimeout(1000);
> 20 |           const[newPage]=await Promise.all([page.waitForEvent("page"),page.locator(links).click()])
     |                                                                                           ^ Error: locator.click: selector: expected string, got object
  21 |           await newPage.waitForTimeout(2000);
  22 |           await newPage.frameLocator('iframe[name="iframeResult"]');
  23 |           await newPage.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();
  24 |           await newPage.waitForTimeout(1000);
  25 | 
  26 | 
  27 | })
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
```