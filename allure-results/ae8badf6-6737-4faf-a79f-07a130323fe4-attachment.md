# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewTest.spec.js >> Verify Title
- Location: tests\NewTest.spec.js:22:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test('verify Login Test',async({browser})=>{
  4  | 
  5  |      const context=await browser.newContext({
  6  | 
  7  |         viewport:{width:1980,height:1020}
  8  | 
  9  |       })
  10 | 
  11 |       const page=await context.newPage();
  12 | 
  13 |       await page.goto("http://localhost:8888/");
  14 |       await page.locator("//input[@name='user_nane']").fill("admin");
  15 |       await page.locator("//input[@name='user_name']").fill("admin");
  16 |       await page.locator("//input[@name='Login']").click();
  17 | 
  18 |       console.log("Login Sucessfully");
  19 | 
  20 | })
  21 | 
  22 | test('Verify Title',async({page})=>{
  23 | 
> 24 |      await page.goto("http://localhost:8888/");
     |                 ^ Error: page.goto: Target page, context or browser has been closed
  25 |      await page.locator("//input[@name='user_name']").fill("admin");
  26 |      await page.locator("//input[@name='user_password']").fill("admin");
  27 |      await page.locator("//input[@name='Login']").click();
  28 | 
  29 |     const title=await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  30 |     console.log(title);
  31 | 
  32 | })
```