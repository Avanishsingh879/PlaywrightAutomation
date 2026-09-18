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

test('verify Mosuse hover',async({page})=>{

      await page.goto("http://localhost:8888/");
     await page.locator("//input[@name='user_name']").fill("admin");
     await page.locator("//input[@name='user_password']").fill("admin");
     await page.locator("//input[@name='Login']").click();

    const title=await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log(title);
     await page.locator("//a[text()='Marketing']").hover();
     await page.waitForTimeout(3000);
     console.log("Verify Mouse Hover");
     const co=await page.locator("//div[@id='Marketing_sub']//a[text()='Contacts']");
     co.click();
     await page.screenshot({path:'./TestFail/ho.png'});
     await page.locator("//input[@name='selected_id']").click();
     await page.waitForTimeout(3000);
     //await page.locator("//input[@value='Send Mail']").first().click();
      const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator("//input[@value='Send Mail']").first().click()
    ]);
    await newPage.locator("//input[@name='subject']").fill("Test");
    await page.waitForTimeout(9000);
    

})




