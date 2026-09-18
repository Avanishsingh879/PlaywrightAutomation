import{test,expect} from "@playwright/test"
import { Console } from "console";
import { console } from "inspector";

test('Verify Login Page',async({browser})=>{

    const context=await browser.newContext({
     
        viewport:{width:1980,height:1020}

    })

    const page=await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(1000);
    console.log("Login Sucessfully");
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");

})

test('Verify Hover',async({page})=>{

      await page.goto("http://localhost:8888/");
      await page.locator("//input[@name='user_name']").fill("admin")
      await page.locator("//input[@name='user_password']").fill("admin");
      await page.locator("//input[@name='Login']").click();
      console.log("Login Sucessfully");
      await page.waitForTimeout(1000);
      await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
      await page.locator("//a[text()='Marketing']").hover();
      await page.screenshot({path: './Screenshots/NewTest.png'});
      await page.waitForTimeout(1000);

})

test('Verify Checkboxes',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Login Sucessfully");

    await page.locator("//a[text()='Support']").hover();
    await page.waitForTimeout(1000);
    const acc=await page.locator("//div[@id='Support_sub']//a[text()='Accounts']");
    await acc.click();
    await page.waitForTimeout(1000);
    const links=await page.locator("//input[@name='selected_id']");

    for(let i=0;i<await links.count();i++){

       await links.nth(i).click();
       await page.waitForTimeout(1000);
    }
    
    await page.waitForTimeout(1000);
    console.log("All Check boxes checked");

})

  test('Verify Multiple window',async({page})=>{

       await page.goto("http://localhost:8888/");
       await page.locator("//input[@name='user_name']").fill("admin");
       await page.locator("//input[@name='user_password']").fill("admin");
       await page.locator("//input[@name='Login']").click();
       await page.waitForTimeout(1000);
       console.log("Login Sucessfully");
       await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
       await page.locator("//a[text()='Support']").hover();
       await page.screenshot({path: './Screenshots/test1.png'});
       await page.waitForTimeout(1000);
       const accountBTN=await page.locator("//div[@id='Support_sub']//a[text()='Contacts']");
       accountBTN.click();
       await page.waitForTimeout(1000);
       await page.locator("//input[@id='72']").click();
       const[newPage]=await Promise.all([page.waitForEvent('popup'),page.locator("//input[@value='Send Mail']").first().click()])
       await newPage.waitForTimeout(1000);
       const sub=await newPage.locator("//input[@name='subject']");
       await sub.fill("Test");
       console.log("Test Verifyed");

    })

    test('Verify AllLinks',async({page})=>{

        await page.goto("http://localhost:8888/");
        await page.locator("//input[@name='user_name']").fill("admin");
        await page.locator("//input[@name='user_password']").fill("admin");
        await page.locator("//input[@name='Login']").click();
        console.log("Login Sucessfully");
        await page.waitForTimeout(1000);
        await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
        await page.locator("//a[text()='Marketing']").click();
        const alllinks=await page.locator("//td[@class='searchAlph']");

        for(let i=0;i< await alllinks.count();i++){

            await alllinks.nth(i).click();
           await page.waitForTimeout(2000);
        }

       await page.waitForTimeout(1000);
       
    })

    test('Verify List',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(1000);
    console.log("Login Sucesfully");
    await page.locator("//a[text()='Marketing']").click();
    await page.waitForTimeout(1000);
    const dropdown = page.locator("//select[@id='bas_searchfield']").first();
    await dropdown.selectOption('Campaign Name');
    console.log("Verify Text");

    })

