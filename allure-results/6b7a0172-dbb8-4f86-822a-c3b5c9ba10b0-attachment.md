# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest1.spec.js >> Verify Login test
- Location: tests\LoginTest1.spec.js:3:5

# Error details

```
Error: browser.newContext: viewport.height: expected integer, got undefined
```

# Test source

```ts
  1  | import{test,expect}from "@playwright/test"
  2  | 
  3  | test('Verify Login test',async({browser})=>{
  4  | 
  5  | 
> 6  |          const context= await browser.newContext({
     |                         ^ Error: browser.newContext: viewport.height: expected integer, got undefined
  7  | 
  8  |            viewport:{width:1980,width:1020}
  9  | 
  10 |           })
  11 | 
  12 | 
  13 |           const page=await context.newPage();
  14 |           await page.goto("http://localhost:8888/");
  15 |           await page.locator("//input[@name='user_name']").fill('admin');
  16 |           await page.locator("//input[@name='user_password']").fill('admin');
  17 |           await page.locator("//input[@name='Login']").click();
  18 | 
  19 |           await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  20 | 
  21 |         })
```