import{test,expect}from '@playwright/test'

test('verifyTest', async ({ browser }) => {
//Set viewport zise.
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

   const page=await context.newPage();
   await page.goto('http://localhost:8888/');
   await page.locator("//input[@name='user_name']").type("admin");
   await page.locator("//input[@name='user_password']").fill("admin");
   await page.locator("//input[@name='Login']").click();

   /////////Veerify Title//////////////
   await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
   console.log("Title Verifyed");
   await page.locator("//a[text()='Marketing']").click();
   //test.setTimeout(60000);
   await page.locator("//div[@id='Marketing_sub']/table/tbody/tr[2]/td/a[text()='Accounts']").click();
   test.setTimeout(60000)
   await page.locator("//input[@id='16']").click();
   await page.locator("//input[@value='Send Mail'][1]").click();
   //test.setTimeout(60000);





});
