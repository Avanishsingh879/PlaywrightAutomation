# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automate_Alerts1.spec.js >> verify alerts check
- Location: tests\Automate_Alerts1.spec.js:55:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://localhost:8888/", waiting until "load"

```

# Test source

```ts
  1  | import { console } from "inspector";
  2  | import{test,expect} from "playwright/test"
  3  | 
  4  | test('verify alerts',async({browser})=>{
  5  | 
  6  | 
  7  |     const context=await browser.newContext({
  8  | 
  9  |          viewport:{width:1980,height:1020}
  10 | 
  11 |     })
  12 | 
  13 |     const page=await context.newPage()
  14 |     await page.goto("http://localhost:8888/");
  15 |     await page.locator("//input[@name='user_name']").fill('admin');
  16 |     await page.locator("//input[@name='user_password']").fill('admin');
  17 |     await page.locator("//input[@name='Login']").click();
  18 |     console.log("Login Sucessfully");
  19 |     //////////////////////////////////////////////////////////
  20 | 
  21 |     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  22 |     console.log("Title Matched");
  23 |     const txt=await page.locator("//a[text()='My Home Page']").textContent();
  24 |     console.log(txt);
  25 |     await page.waitForTimeout(1000);
  26 | 
  27 | })
  28 | 
  29 | test('Verify Dashboard Page',async({page})=>{
  30 | 
  31 |        await page.goto("http://localhost:8888/");
  32 |        await page.locator("//input[@name='user_name']").fill('admin');
  33 |        const pwd=await page.locator("//input[@name='user_password']");
  34 |        pwd.fill('admin');
  35 | 
  36 |        await page.locator("//input[@name='Login']").click();
  37 |        await page.waitForTimeout(1000);
  38 | 
  39 |        const ho=await page.locator("//a[text()='Sales']").hover();
  40 | 
  41 |        await page.locator("//div[@id='Sales_sub']//a[text()='Accounts']").click();
  42 |        await page.waitForTimeout(1000);
  43 |        const list=await page.locator("//input[@name='selected_id']");
  44 | 
  45 |        for(let i=0; await list.count;i++){
  46 | 
  47 |         list.nth(i).click();
  48 |         await page.waitForTimeout(1000);
  49 |        }
  50 |       console.log("All checkbox checked");
  51 | 
  52 | 
  53 | })
  54 | 
  55 | test('verify alerts check',async({page})=>{
  56 | 
  57 | 
> 58 |     await page.goto("http://localhost:8888/");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  59 |     await page.locator("//input[@name='user_name']").fill('admin');
  60 |     await page.locator("//input[@name='user_password']").fill('admin');
  61 |     await page.locator("//input[@name='Login']").click();
  62 | 
  63 |     await page.waitForTimeout(1000);
  64 | 
  65 |     const text=await page.locator("//a[text()='My Home Page']").textContent();
  66 |     console.log(text);
  67 | 
  68 |     await page.locator("//a[@text()='Sales']").hover();
  69 | 
  70 |     const acc=await page.locator("//div[@id='Sales_sub']")
  71 |     acc.click();
  72 |     await page.waitForTimeout(1000);
  73 |     console.log("Account Verifyed");
  74 |     await page.locator("//table[@class='lvt small']//input[@name='selectall']").click();
  75 |     await page.locator("//table[@class='small']//input[@value='Delete']").click();
  76 | 
  77 |     console.log("check box chedked");
  78 |     page.on('dialog',async dialog=>{
  79 | 
  80 |         console.log('Dialog message:',dialog.message());
  81 |         await dialog.dismiss();
  82 |     })
  83 | 
  84 |     //page.on('dialog', async dialog => { console.log('Dialog message:', dialog.message()); await dialog.accept(); });
  85 | 
  86 | })
```