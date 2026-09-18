import{test,expect}from  "@playwright/test"

test('Verify Demo Test',async({browser})=>{

   const context =await browser.newContext({

       viewport:{width:1980,height:1010}

    })

   const page=await context.newPage();
   await page.goto('http://localhost:8888/');
   await page.locator("//input[@name='user_name']").fill('admin');
   await page.locator("//input[@name='user_password']").fill('admin');
   await page.locator("//input[@name='Login']").click();
   
   await page.waitForTimeout(5000);
})

   test('verify Title',async({page})=>{

   await page.goto('http://localhost:8888/');
   await page.locator("//input[@name='user_name']").fill('admin');
   await page.locator("//input[@name='user_password']").fill('admin');
   await page.locator("//input[@name='Login']").click();

   await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
   console.log("Ttile Verifyed")
   await page.waitForTimeout(5000);


   })

test('Verify Hover',async({page})=>{

   await page.goto('http://localhost:8888/');
   
   await page.locator("//input[@name='user_name']").fill('admin');
   await page.locator("//input[@name='user_password']").fill('admin');
   await page.locator("//input[@name='Login']").click();
   await page.waitForTimeout(5000);
   ///////Handle Mouse Hover

   //await page.locator("//a[text()='Marketing']").hover();
   console.log("Mouse Hover Handled")
   await page.waitForTimeout(5000);
   
})

test('Verify All CheckBoxes',async({page})=>{

    await page.goto('http://localhost:8888/');
    await page.locator("//input[@name='user_name']").fill('admin');
    await page.locator("//input[@name='user_password']").fill('admin');
    await page.locator("//input[@name='Login']").click();

    console.log("Login Sucessfully");
    await page.locator("//a[text()='Marketing']").hover();
    console.log("Mouse Hover Handled")
    await page.waitForTimeout(5000);

    await page.locator("//div[@id='Marketing_sub']/table/tbody/tr/td/a[text()='Campaigns']").click();
    await page.waitForTimeout(2000);

    const items=page.locator("//input[@name='selected_id']");

    for (let i = 0; i < await items.count(); i++) {
    await items.nth(i).click();
    await page.waitForTimeout(2000);
  }


   
})


   

