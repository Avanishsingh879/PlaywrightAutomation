import{test,expect} from '@playwright/test'

 const testdata=JSON.parse(JSON.stringify(require("./TestData.json")))////=> Arrow Function

test('verify test',async({browser})=>{

     const context=await browser.newContext({

        viewport:{width:1980,height:1080}
     });

     
     const page=await context.newPage();
     await page.goto('http://localhost:8888/');
     const element=await page.locator("//input[@name='user_name']");
     await expect(element).toBeVisible();
     await expect(element).toBeEmpty();
     await element.fill(testdata.username);
     const elepassword=await page.locator("//input[@name='user_password']");
     await expect(elepassword).toBeVisible();
     await expect(elepassword).toBeEmpty();
     await elepassword.fill(testdata.password);
     const login=await page.locator("//input[@name='Login']");
     login.click();
     await page.locator("//a[text()='Marketing']").hover();
     //test.setTimeout(6000);
     const mkt=await page.locator("//div[@id='Marketing_sub']/table/tbody/tr[5]/td/a[text()='Leads']");
     mkt.click();
     //await browser.close();









});







  