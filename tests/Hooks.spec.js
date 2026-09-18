import{test,expect}from "@playwright/test"


test('Test Case',async({browser})=>   {

    const context=await browser.newContext({

        viewport:{ width:1980,height:1080}
    })


    const page=await context.newPage();
    await page.goto('http://localhost:8888/');
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();

    console.log("Login Sucessfully")

    await page.screenshot({ path:'./TestFail/test1.png' });

    await page.waitForTimeout(80000);

    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Verify Title");





});