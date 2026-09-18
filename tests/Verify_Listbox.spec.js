import{test,expect} from "@playwright/test"
import { console } from "inspector";

test('Verify list',async({browser})=>{

      
    const context= await browser.newContext({

            viewport:{width:1980,height:1020}
      })

      const page=await context.newPage();
      await page.goto("http://localhost:8888/");
      await page.locator("//input[@name='user_name']").fill("admin");
      await page.locator("//input[@name='user_password']").fill("admin");
      await page.locator("//input[@name='Login']").click();
      console.log("Login Sucessfully");
      await page.waitForTimeout(1000);
      await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
      await page.locator("//a[text()='Marketing']").click();
      await page.waitForTimeout(1000);
      //Select value
      //const dropdownlist=page.locator("//select[@id='bas_searchfield']").first();
      //await dropdownlist.selectOption('Campaign Name');
      //console.log("Verify text")
      //select Lebel
      //const dropdown=page.locator("//select[@id='bas_searchfield']").first();
      //const txt = await dropdown.selectOption({ label: 'Campaign Name' });
      //console.log(txt);
      //select Index
      //const drop=page.locator("//select[@id='bas_searchfield']").first();
      //const txt=await drop.selectOption({index: 2 });
      //console.log(txt);
      /////////////////////////////////////////////////////////////
       //Using ToHaveValue///////////////

       const DropList=page.locator("//select[@id='bas_searchfield']");
       const allOptions=await DropList.locator('option').allTextContents();
       await expect(allOptions).toEqual(['Campaign Name','Campaign Type']);
       console.log("Verify All text");

       //Validate that specific values exist
       
       //await expect(page.locator('#country option')).toHaveText([
       //'United States',
       //'India',
       //'United Kingdom'
       //]);



})