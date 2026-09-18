import{ test,expect} from "Playwright/test"

    ////https://www.w3schools.com/js/
      test('verify Frame',async({browser})=>{

      const context=await browser.newContext({

        viewport:{width:1980,height:1020}
          })

       const page=await context.newPage();
        await page.goto("//https://www.w3schools.com/js/");
       console.log("Browser launch");
       const links=page.locator("//a[text()='Try it Yourself »']");
       await links.scrollIntoViewIfNeeded();
       await links.click();
      await page.waitForTimeout(1000);
        const[newPage]=Promise.all([context.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
      await newPage.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();
     await newPage.waitForTimeout(1000);
     await page.screenshot({path:'./Screenshots/NewData.png'});



})