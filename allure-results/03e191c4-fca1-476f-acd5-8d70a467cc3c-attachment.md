# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_Multiplewindow1.spec.js >> verify multiple window
- Location: tests\Handle_Multiplewindow1.spec.js:3:5

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "page"
============================================================
```

# Test source

```ts
  1  | import{test,expact} from "@playwright/test"
  2  | 
  3  | test('verify multiple window',async({browser})=>{
  4  | 
  5  | 
  6  |    const context= await browser.newContext({
  7  | 
  8  |        viewport:{width:1980,height:1020}
  9  | 
  10 |     })
  11 | 
  12 |     const page=await context.newPage();
  13 |     await page.goto("https://demoqa.com/browser-windows");
  14 |     await page.waitForTimeout(1000);
  15 | 
> 16 |    const[newPage]=await Promise.all([page.waitForEvent("page"),page.locator("//button[@id='windowButton']").click()]);
     |                                           ^ Error: page.waitForEvent: Target page, context or browser has been closed
  17 |    const txt=await newPage.locator("//h1[text()='This is a sample page']").textContent();
  18 | 
  19 |    console.log(txt);
  20 | 
  21 | })
```