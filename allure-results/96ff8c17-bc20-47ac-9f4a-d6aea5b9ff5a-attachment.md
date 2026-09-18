# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_Frame.spec.js >> Handled Frame
- Location: tests\Verify_Frame.spec.js:5:5

# Error details

```
Error: page.goto: net::ERR_ABORTED at ttps://www.w3schools.com/js
Call log:
  - navigating to "ttps://www.w3schools.com/js", waiting until "load"

```

# Test source

```ts
  1  | //https://www.w3schools.com/js/
  2  | 
  3  | import{test,expect} from "@playwright/test"
  4  | 
  5  | test('Handled Frame',async({browser})=>{
  6  | 
  7  |       const context=await browser.newContext({
  8  | 
  9  |         viewport:{width:1980,height:1020}
  10 |       })
  11 | 
  12 |      const page= await context.newPage();
> 13 |      await page.goto("ttps://www.w3schools.com/js");
     |                 ^ Error: page.goto: net::ERR_ABORTED at ttps://www.w3schools.com/js
  14 |      console.log("Browser Launch");
  15 |      await page.waitForTimeout(1000);
  16 |      const scrollBtn=await page.locator("//a[text()='Try it Yourself »']");
  17 |      const scrollbtnn=await scrollBtn.scrollIntoViewIfNeeded();
  18 |      await page.screenshot({path: './Screenshots/scroll.png'});
  19 |      await page.waitForTimeout(1000);
  20 |      const[newPage]=await Promise.all([page.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
  21 |      console.log("Handled Multiple window");
  22 |      const iframe=newPage.frameLocator("iframe[name='iframeResult']");
  23 |      const clk=iframe.locator("//h1[text()='My First JavaScript']//following-sibling::button");
  24 |      await clk.click();
  25 |      page.waitForTimeout(1000);
  26 | })    
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
```