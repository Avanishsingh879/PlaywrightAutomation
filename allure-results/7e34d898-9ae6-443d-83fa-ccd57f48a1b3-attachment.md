# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NewTest.spec.js >> First Login
- Location: tests\NewTest.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@nname=\'Login\']')

```

# Test source

```ts
  1  | import{test,expact} from "@playwright/test"
  2  | 
  3  | test('First Login',async({browser})=>{
  4  | 
  5  |    const context=await browser.newContext({
  6  | 
  7  |           viewport:{width:1980,height:1020}
  8  | 
  9  |    })
  10 |    
  11 |      const page=await context.newPage();
  12 |      await page.goto("http://localhost:8888/");
  13 |      await page.locator("//input[@name='user_name']").fill('admin');
  14 |      await page.locator("//input[@name='user_password']").fill('admin');
> 15 |      await page.locator("//input[@name='Login']").click();
     |                                                    ^ Error: locator.click: Target page, context or browser has been closed
  16 |      console.log("Login Sucessfully");
  17 | 
  18 |      ///////////////////////////////////////////////////////////
  19 |     
  20 |      await expact(page).tohaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM")
  21 |      console.log("Title Verifyed");
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | })
```