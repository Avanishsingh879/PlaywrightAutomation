# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test22.spec.js >> verify Title
- Location: tests\Test22.spec.js:20:8

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://localhost:8888/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect}from  "@playwright/test"
  2  | 
  3  | test('Verify Demo Test',async({browser})=>{
  4  | 
  5  |    const context =await browser.newContext({
  6  | 
  7  |        viewport:{width:1980,height:1010}
  8  | 
  9  |     })
  10 | 
  11 |    const page=await context.newPage();
  12 |    await page.goto('http://localhost:8888/');
  13 |    await page.locator("//input[@name='user_name']").fill('admin');
  14 |    await page.locator("//input[@name='user_password']").fill('admin');
  15 |    await page.locator("//input[@name='Login']").click();
  16 |    
  17 |    await page.waitForTimeout(5000);
  18 | })
  19 | 
  20 |    test('verify Title',async({page})=>{
  21 | 
> 22 |    await page.goto('http://localhost:8888/');
     |               ^ Error: page.goto: Target page, context or browser has been closed
  23 |    await page.locator("//input[@name='user_name']").fill('admin');
  24 |    await page.locator("//input[@name='user_password']").fill('admin');
  25 |    await page.locator("//input[@name='Login']").click();
  26 | 
  27 |    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  28 |    console.log("Ttile Verifyed")
  29 |    await page.waitForTimeout(5000);
  30 | 
  31 | 
  32 |    })
  33 | 
  34 | test('Verify Hover',async({page})=>{
  35 | 
  36 |    await page.goto('http://localhost:8888/');
  37 |    
  38 |    await page.locator("//input[@name='user_name']").fill('admin');
  39 |    await page.locator("//input[@name='user_password']").fill('admin');
  40 |    await page.locator("//input[@name='Login']").click();
  41 |    await page.waitForTimeout(5000);
  42 |    ///////Handle Mouse Hover
  43 | 
  44 |    //await page.locator("//a[text()='Marketing']").hover();
  45 |    console.log("Mouse Hover Handled")
  46 |    await page.waitForTimeout(5000);
  47 |    
  48 | })
  49 | 
  50 | test('Verify All CheckBoxes',async({page})=>{
  51 | 
  52 |     await page.goto('http://localhost:8888/');
  53 |     await page.locator("//input[@name='user_name']").fill('admin');
  54 |     await page.locator("//input[@name='user_password']").fill('admin');
  55 |     await page.locator("//input[@name='Login']").click();
  56 | 
  57 |     console.log("Login Sucessfully");
  58 |     await page.locator("//a[text()='Marketing']").hover();
  59 |     console.log("Mouse Hover Handled")
  60 |     await page.waitForTimeout(5000);
  61 | 
  62 |     await page.locator("//div[@id='Marketing_sub']/table/tbody/tr/td/a[text()='Campaigns']").click();
  63 |     await page.waitForTimeout(2000);
  64 | 
  65 |     const items=page.locator("//input[@name='selected_id']");
  66 | 
  67 |     for (let i = 0; i < await items.count(); i++) {
  68 |     await items.nth(i).click();
  69 |     await page.waitForTimeout(2000);
  70 |   }
  71 | 
  72 | 
  73 |    
  74 | })
  75 | 
  76 | 
  77 |    
  78 | 
  79 | 
```