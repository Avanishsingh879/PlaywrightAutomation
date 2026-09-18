import{test,expect} from '@playwright/test'

test('verify Alert pop',async({browser})=>{

    const context= await browser.newContext({
    
         viewport:{ width:1980,height:1080}

    });

   const page= await context.newPage();

   await page.goto('http://localhost:8888/');
   await page.locator("//input[@name='user_name']").fill("admin")

   await page.locator("//input[@name='user_password']").fill("admin");

   await page.locator("//input[@name='Login']").click();

   await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
   console.log("Title Verify");

   await page.locator("//a[text()='Tools']").hover();

   await page.locator("//div[@id='Tools_sub']/table/tbody/tr[3]/td/a[text()='Documents']").click();

   await page.screenshot({ path: './TestFail/TakeScrenshot1.png'});
   ///await page.screenshot({ path: './FailScreenshot/screenshot1.png' });

   await page.locator("//input[@name='selectall1']").click();
   
   await page.locator("//input[@name='delete']").click();
   /////////Alert/////////////////////

   page.on("dialog", async dialog=> {
   expect(dialog.type()).toContain('OK')
  await alert.accept();
  await page.waitForTimeout(5000);
  })
   

   





});