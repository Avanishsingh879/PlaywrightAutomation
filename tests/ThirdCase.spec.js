
import {test,expect} from '@playwright/test'

test('testcase',async({browser})=>{

    const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
    
    const page = await context.newPage();
    await page.goto('http://localhost:8888/');
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();

    //////////////Validation///////////////
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");





});