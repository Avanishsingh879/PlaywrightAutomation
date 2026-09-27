//https://selectorshub.com/xpath-practice-page/

import{test,expect} from "@playwright/test"

test('Verify ShadowDom',async({browser})=>{

       const context=await browser.newContext({

         viewport:{width:1980,height:1020}
       })

       const page= await context.newPage();
       await page.goto("https://selectorshub.com/xpath-practice-page/");
       await page.waitForTimeout(2000);
       console.log("Browser Launch");
       const scroll=await page.locator("//a[text()='Kevin.Mathews']");
       await scroll.scrollIntoViewIfNeeded();
       await page.waitForTimeout(2000);
       const shadowHos=await page.locator("//div[@id='userName']");
       await shadowHos.locator("//input[@title='user name field']").fill("Test");
       await page.waitForTimeout(6000);





       
})