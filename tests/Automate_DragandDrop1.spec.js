////Automate Drag and Drop 
//https://testautomationpractice.blogspot.com/
import{test,expect} from "@playwright/test"

test('verify Drag and Drop',async({browser})=>{

      const context=await browser.newContext({

         viewport:{width:1980,height:1020}
      })

      const page=await context.newPage();
      await page.goto("https://testautomationpractice.blogspot.com");
      console.log("Launch Browser");
      const Dt=await page.locator("//div[@id='draggable']");
      const scroll=await Dt.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      const Drag=await page.locator("//div[@id='draggable']");
      const Drop=page.locator("//div[@id='droppable']");
      await Drag.dragTo(Drop);
      await page.waitForTimeout(1000);
      await page.screenshot({path:'./Screenshots/Drag.png'});
      console.log("Darg and drop Handled");




})

