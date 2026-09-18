import{test,expect} from "@playwright/test"

test('verify Login Test',async({browser})=>{

     const context=await browser.newContext({

        viewport:{width:1980,height:1020}

      })

      const page=await context.newPage();

      await page.goto("http://localhost:8888/");
      await page.locator("//input[@name='user_name']").fill("admin");
      await page.locator("//input[@name='user_password']").fill("admin");
      await page.locator("//input[@name='Login']").click();

      console.log("Login Sucessfully");

})

test('Verify Title',async({page})=>{

     await page.goto("http://localhost:8888/");
     await page.locator("//input[@name='user_name']").fill("admin");
     await page.locator("//input[@name='user_password']").fill("admin");
     await page.locator("//input[@name='Login']").click();

    const title=await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log(title);

})

test('verify all checkbox',async({page})=>{


      await page.goto("http://localhost:8888/");
      await page.locator("//input[@name='user_name']").fill("admin");
      await page.locator("//input[@name='user_password']").fill("admin");
      await page.locator("//input[@name='Login']").click();
      console.log("Login Sucessfully");
      await page.screenshot({ path: './TestFail/NewTest.png'});
      const text=page.locator("//a[text()='Marketing']").textContent();
      console.log(text);
      await page.locator("//a[text()='Marketing']").hover();
      await page.screenshot({path: './FailScreenshot/Neee.png'});

      const acc=await page.locator("//div[@id='Marketing_sub']//a[text()='Accounts']");
      acc.click();
      await page.waitForTimeout(5000);
      
      const listt=await page.locator("//input[@name='selected_id']");
      await page.waitForTimeout(6000);
      for(let i=0;i<await listt.count(); i++ ){

        await listt.nth(i).click();
        await page.waitForTimeout(2000);
        
      }

     
      

})