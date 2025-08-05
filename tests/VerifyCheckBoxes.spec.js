import{test,expect}from '@playwright/test'

test('VerifyCheckBoxed',async({browser})=> {

    const context=await browser.newContext({

        viewport:{width:1980,height:1080}
    });
    
    const page=await context.newPage();
    await page.goto('http://localhost:8888/');
    await page.locator("//input[@name='user_name']").fill('admin');
    const pwd=await page.locator("//input[@name='user_password']");
    pwd.fill('admin');

    await page.locator("//input[@name='Login']").click();

    /////////////////////////////////////////////////////////

   await page.locator("//a[text()='Marketing']").hover();
   
   console.log("Mouse Hover");
  test.setTimeout(60000);
  const checkboxes = await page.$$("//input[@name='selected_id']");
   for (const checkbox of checkboxes) {
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
    }
   }






});

