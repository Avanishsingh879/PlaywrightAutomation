////https://www.w3schools.com/js/

import{test,expect} from "@playwright/test"

test('Hanled hover',async({browser})=>{


      const context=await browser.newContext({

        viewport:{width:1980,height:1020}
       })

       const page=await context.newPage();
       await page.goto("https://www.w3schools.com/js/");
       const data=await page.locator("//a[text()='Try it Yourself »']");
       await data.scrollIntoViewIfNeeded();
       await page.waitForTimeout(1000);
       await data.click();
       await page.waitForTimeout(1000);
       const[newPage]=await Promise.all([context.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
       
       const fram=newPage.frameLocator('iframe[name="iframeResult"]');
       
       await fram.locator("//h1[text()='My First JavaScript']//following-sibling::button").click()
       await page.screenshot({path:'./Screenshots/newdata.png'});

})