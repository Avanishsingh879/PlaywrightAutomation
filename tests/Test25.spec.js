import{test,expect} from "@playwright/test"
import { console } from "inspector";

test('verify login',async({browser})=>{

    const context=await browser.newContext({

       viewport:{ width:1980,height:1020}

    })

    const page=await context.newPage();
    await page.goto('http://localhost:8888/');
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(5000);

})

test('verify Homepage Title',async({page})=>{

await page.goto('http://localhost:8888/');
await page.locator("//input[@name='user_name']").fill('admin');
await page.locator("//input[@name='user_password']").fill('admin');
await page.locator("//input[@name='Login']").click();
await page.waitForTimeout(5000);

await page.screenshot({ path: './TestFail/test25.png'});

await expect(page).toHaveTitle('admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM');
console.log("Title Verifyed");

})

test('Verify MouseHover',async({page})=>{

    await page.goto('http://localhost:8888/');
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Tiltle Verifyed");
    await page.locator("//a[text()='Sales']").hover();
    await page.waitForTimeout(2000);


})

  test('verify All checkBox',async({page})=>{

    await page.goto('http://localhost:8888/');
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");

    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Title Verifyed");

    await page.locator("//a[text()='Sales']").hover();

    await page.waitForTimeout(3000);

    await page.locator("//div[@id='Sales_sub']/table/tbody/tr[2]/td/a[text()='Accounts']").click();
    //acc.click();
    await page.waitForTimeout(5000);

    const lists=page.locator("//input[@name='selected_id']");

    for (let i = 0; i < await lists.count(); i++) {
    await lists.nth(i).click();
    await page.waitForTimeout(2000);
  }

    console.log("Verify All checkboxes")
        

  })