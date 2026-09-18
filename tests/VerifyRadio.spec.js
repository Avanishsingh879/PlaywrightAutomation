import{test,expect}from "@playwright/test"

test('verify Radio',async({browser})=>{

   const context= await browser.newContext({
    
       viewport:{ width:1980,height:1080}

    })

     const page=await context.newPage();

     await page.goto('http://localhost:8888/');
     await page.locator("//input[@name='user_name']").fill('admin');
     await page.locator("//input[@name='user_password']").fill('admin');
     await page.locator("//input[@name='Login']").click();


})

test('verify Title page',async({page})=>{

    await page.goto('http://localhost:8888/');
     await page.locator("//input[@name='user_name']").fill('admin');
     await page.locator("//input[@name='user_password']").fill('admin');
     await page.locator("//input[@name='Login']").click();
    
     await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");

     await page.waitForTimeout(8000);

     await page.screenshot({ path: './TestFail/New.png'})


});