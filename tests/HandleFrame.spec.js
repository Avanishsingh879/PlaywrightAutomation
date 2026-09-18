import{test,expect} from "@playwright/test"

test('Verify Login Test',async({browser})=>{

        const context= await browser.newContext({
           
            viewport:{width:1980,height:1020}

         });

         const page=await context.newPage();
         await page.goto("http://localhost:8888/");
         await page.locator("//input[@name='user_name']").fill("admin");
         await page.locator("//input[@name='user_password']").fill("admin");
         page.locator("//input[@name='Login']").click();
         console.log("Login Sucessfully");
         await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
         await page.screenshot({path:'./Screenshots/newfail.png'});

})

test('verify Mouse Hover',async({page})=>{

     await page.goto("http://localhost:8888/");
     await page.locator("//input[@name='user_name']").fill("admin");
     await page.locator("//input[@name='user_password']").fill("admin");
     await page.locator("//input[@name='Login']").click();
     console.log("Login Sucessfully");
     await page.locator("//a[text()='Marketing']").hover();
     const acc=await page.locator("//div[@id='Marketing_sub']//a[text()='Accounts']");
     acc.click();
     await page.waitForTimeout(1000);
     const links=page.locator("//input[@name='selected_id']");

     for(let i=0;i< await links.count();i++){

          await links.nth(i).click();
          page.waitForTimeout(1000);
     }

})
