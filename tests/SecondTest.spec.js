import{test,expect}from '@playwright/test'

test('verifyTest', async ({ browser }) => {
//Set viewport zise.
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  
  //Launch browser maximised.
  const page = await context.newPage();

  await page.goto('http://localhost:8888/');
  
  await page.locator("//input[@name='user_name']").fill('admin');
  await page.locator("//input[@name='user_password']").fill('admin');
  await page.locator("//input[@name='Login']").click();
  //await page.waitForTimeout(5000);
  await page.screenshot({ path: './FailScreenshot/screenshot1.png' });

    //const assert = require('assert');
    //const title = await page.title();
    //assert.strictEqual(title, 'admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM');
    //await expect(page).toHaveTitle(/Playwright/);

    await page.locator("//a[text()='Marketing']").hover()
  
    await page.locator("//div[@id='Marketing_sub']/table/tbody/tr[2]/td/a[text()='Accounts']").click();
    test.setTimeout(60000);
   //const checkboxes = page.locator("//input[@name='selected_id']");
   const checkboxes = await page.$$("//input[@name='selected_id']");
   for (const checkbox of checkboxes) {
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
    }
}



    
});

test('HomeTitle',async({page})=>{
  
  await page.goto('http://localhost:8888/');
  await page.locator("//input[@name='user_name']").fill('admin');
  await page.locator("//input[@name='user_password']").fill('admin');
  await page.locator("//input[@name='Login']").click();
  await page.waitForTimeout(2000);
    //const assert = require('assert');
    //const title = await page.title();
    //assert.strictEqual(title, 'admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM');
    //await expect(page).toHaveTitle(/Playwright/);

    await expect(page).toHaveTitle(/admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM/);

});

