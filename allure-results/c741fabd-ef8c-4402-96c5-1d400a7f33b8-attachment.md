# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Verify_LoginTest.spec.js >> verify hover
- Location: tests\Verify_LoginTest.spec.js:31:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test('Verify Login Page',async({browser})=>{
  4  | 
  5  |        const context=await browser.newContext({
  6  | 
  7  |              viewport:{width:1980,height:1020}
  8  | 
  9  | 
  10 |         })
  11 | 
  12 | 
  13 |          const page= await context.newPage();
  14 |         await page.goto("http://localhost:8888/");
  15 |         await page.locator("//input[@name='user_name']").fill('admin');
  16 |         await page.locator("//input[@name='user_password']").fill('admin');
  17 |         await page.locator("//input[@name='Login']").click();
  18 | 
  19 |         ////verify Title
  20 | 
  21 |         await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  22 | 
  23 |         console.log("Title Verifyed");
  24 |         const txt=await page.locator("//a[text()='My Home Page']").textContent();
  25 |         console.log(txt);
  26 | 
  27 |     
  28 | 
  29 | })
  30 | 
  31 | test('verify hover',async({browser})=>{
  32 | 
> 33 |     await page.goto("http://localhost:8888/");
     |     ^ ReferenceError: page is not defined
  34 |     await page.locator("//input[@name='user_name']").fill('admin');
  35 |     await page.locator("input[@name='user_password']").fill('admin');
  36 |     await page.locator("//input[@name='Login']").click();
  37 | 
  38 |     ///Verify Home Page title
  39 | 
  40 |     await expect(page).tohaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  41 |     console.log("Title Verifyed");
  42 | 
  43 |     //////////////Verify Mouse Hover//////////////////
  44 |     await page.locator("//a[@text()='Marketing']").hover();
  45 |     console.log("Mouse Hover Habdled");
  46 |      
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | })
  56 | 
  57 | 
  58 | 
  59 | 
```