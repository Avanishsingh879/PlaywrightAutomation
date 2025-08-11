import{test,expect}from "@playwright/test"

test('verify list',async({browser})=>{

    const Context=await browser.newContext({

        viewport:{ width:1980,height:1020}
     })

       const page=await Context.newPage();
       await page.goto("http://localhost:8888/");
       await page.locator("//input[@name='user_name']").fill('admin');
       await page.locator("//input[@name='user_password']").fill('admin');
       await page.locator("//input[@name='Login']").click();
       await page.waitForLoadState();
       await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
       console.log("Title Verifyed")
       
       
       





});

