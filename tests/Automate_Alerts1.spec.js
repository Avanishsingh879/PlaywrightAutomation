import { console } from "inspector";
import{test,expect} from "playwright/test"

test('verify alerts',async({browser})=>{


    const context=await browser.newContext({

         viewport:{width:1980,height:1020}

    })

    const page=await context.newPage()
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
    //////////////////////////////////////////////////////////

    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Title Matched");
    const txt=await page.locator("//a[text()='My Home Page']").textContent();
    console.log(txt);
    await page.waitForTimeout(1000);

})

test('verify alerts check',async({page})=>{


    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();

    await page.waitForTimeout(1000);

    const text=await page.locator("//a[text()='My Home Page']").textContent();
    console.log(text);

    await page.locator("//a[text()='Sales']").hover();

    await page.locator("//div[@id='Sales_sub']//a[text()='Accounts']").click();
    await page.waitForTimeout(1000);
    console.log("Account Verifyed");
    await page.waitForTimeout(4000);
    await page.locator("//table[@class='small']//input[@value='Delete'][1]").dblclick();
    await page.locator("//table[@class='lvt small']//input[@name='selectall']").click();
    await page.waitForTimeout(3000);
    await page.locator("//table[@class='small']//input[@value='Delete'][1]").click();
    await page.waitForTimeout(2000);
    console.log("check box checked");
    page.on('dialog',async dialog=>{

        console.log('Dialog message:',dialog.message());
        await dialog.dismiss();
    })

    //page.on('dialog', async dialog => { console.log('Dialog message:', dialog.message()); await dialog.accept(); });

})