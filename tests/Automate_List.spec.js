import{test,expect}from "@playwright/test"
import { console } from "inspector";

test('Veriy Login Page',async({browser})=>{

    const context=await browser.newContext({

        viewport:{width:1980,height:1020}
    })

    const page=await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();

    await page.screenshot({path: './Screenshots/List.png'});

    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Title varifyed");

})

test('verify Checkbox',async({page})=>{

      await page.goto("http://localhost:8888/");
      await page.locator("//input[@name='user_name']").fill('admin');
      await page.locator("//input[@name='user_password']").fill('admin');
      await page.locator("//input[@name='Login']").click();
      console.log("Login Sucessfully");
      await page.locator("//a[text()='Sales']").hover();
      const acc=await page.locator("//div[@id='Sales_sub']//a[text()='Accounts']");
      acc.click();
      await page.waitForTimeout(6000);
      const listt=await page.locator("//input[@name='selected_id']");
      await page.waitForTimeout(6000);
      for(let i=0;i<await listt.count(); i++ ){

        await listt.nth(i).click();

        
      }


})