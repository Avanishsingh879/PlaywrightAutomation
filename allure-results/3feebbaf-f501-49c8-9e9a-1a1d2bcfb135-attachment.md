# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Handle_Multiplewindow2.spec.js >> verify Login Test
- Location: tests\Handle_Multiplewindow2.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at http://localhost:8888/
Call log:
  - navigating to "http://localhost:8888/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: A network change was detected.
    - generic [ref=e9]: ERR_NETWORK_CHANGED
  - button "Reload" [ref=e12] [cursor=pointer]
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
> 13 |       await page.goto("http://localhost:8888/");
     |                  ^ Error: page.goto: net::ERR_NETWORK_CHANGED at http://localhost:8888/
  14 |       await page.locator("//input[@name='user_name']").fill("admin");
  15 |       await page.locator("//input[@name='user_password']").fill("admin");
  16 |       await page.locator("//input[@name='Login']").click();
  17 | 
  18 |       console.log("Login Sucessfully");
  19 | 
  20 | })
  21 | 
  22 | test('Verify Title',async({page})=>{
  23 | 
  24 |      await page.goto("http://localhost:8888/");
  25 |      await page.locator("//input[@name='user_name']").fill("admin");
  26 |      await page.locator("//input[@name='user_password']").fill("admin");
  27 |      await page.locator("//input[@name='Login']").click();
  28 | 
  29 |     const title=await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  30 |     console.log(title);
  31 | 
  32 | })
  33 | 
  34 | test('verify Mosuse hover',async({page})=>{
  35 | 
  36 |       await page.goto("http://localhost:8888/");
  37 |      await page.locator("//input[@name='user_name']").fill("admin");
  38 |      await page.locator("//input[@name='user_password']").fill("admin");
  39 |      await page.locator("//input[@name='Login']").click();
  40 | 
  41 |     const title=await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
  42 |     console.log(title);
  43 |      await page.locator("//a[text()='Marketing']").hover();
  44 |      await page.waitForTimeout(3000);
  45 |      console.log("Verify Mouse Hover");
  46 |      const co=await page.locator("//div[@id='Marketing_sub']//a[text()='Contacts']");
  47 |      co.click();
  48 |      await page.screenshot({path:'./TestFail/ho.png'});
  49 |      await page.locator("//input[@name='selected_id']").click();
  50 |      await page.waitForTimeout(3000);
  51 |      //await page.locator("//input[@value='Send Mail']").first().click();
  52 |     const[newPage]=await Promise.all([context.waitForEvent("page"),page.locator("//input[@value='Send Mail']").first().click()]);
  53 |     await page.waitForTimeout(9000);
  54 |     await newPage.locator("//input[@name='subject']").fill("Test");
  55 |     await page.waitForTimeout(9000);
  56 | 
  57 | })
  58 | 
  59 | 
  60 | 
```