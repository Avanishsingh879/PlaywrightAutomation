import { test, expect } from "playwright/test"

test('Verify Alerts',async({browser})=>{

    const context=await browser.newContext({

        viewport:{width:1980,height:1020}
    })

    const page=await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    await page.screenshot({path: './Screenshots/alert.png'});
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Title Verifyed");
    await page.locator("//a[text()='Support']").hover();
    await page.waitForTimeout(1000);
    console.log("Hover verify");
    await page.locator("//div[@id='Support_sub']//a[text()='Contacts']").click();
    const recordCheckbox = page.locator("//input[@id='72']");
    await recordCheckbox.waitFor({ state: 'attached' });
    await recordCheckbox.check();
    await page.locator("//input[@value='Delete']").first().click();
    await page.waitForTimeout(5000);
    page.on('dialog',async dialog=>{

       console.log('Dialog message:',dialog.message());
        dialog.accept();
    })



})