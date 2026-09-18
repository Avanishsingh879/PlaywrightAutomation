# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_Frame.spec.js >> verify Iframe
- Location: tests\Handle_Frame.spec.js:5:5

# Error details

```
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
```

# Test source

```ts
  1  | //https://www.w3schools.com/js/
  2  | 
  3  | import{test,expect} from "@playwright/test"
  4  | 
  5  | test('verify Iframe',async({browser})=>{
  6  | 
  7  |        const context=await browser.newContext({
  8  | 
  9  |             viewport:{width:1890,height:1020}
  10 |         })
  11 | 
  12 |         const page=await context.newPage();
  13 |         await page.goto("https://www.w3schools.com/js/");
  14 |         await console.log("Browser launch");
  15 |         const btn= page.locator("//a[text()='Try it Yourself »']");
  16 |         await btn.scrollIntoViewIfNeeded();
  17 |         await btn.click();
  18 |         await page.waitForTimeout(1000);
> 19 |         const[newPage]=Promise.all([context.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
     |                        ^ TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
  20 |         const frame=newPage.frameLocator('iframe[name="iframeResult"]');
  21 |         await frame.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();
  22 | 
  23 | })
```