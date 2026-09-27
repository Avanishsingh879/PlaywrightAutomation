//pressSequentially
//Playwright also provides pressSequentially(), which types the characters sequentially:
//locator.pressSequentially()
//This method focuses on the element and then sends a keydown, keypress/input, and keyup event for each character in the text to simulate the real-like user’s behavior.
import{test,expect} from "@playwright/test"

test('Habdle pressSequentially',async({browser})=>{

       const context=await browser.newContext({

        viewport:{width:1980,height:1020}
       })

       const page=await context.newPage();
       await page.goto("http://localhost:8888/");
       console.log("Launch Browser");
       await page.waitForTimeout(1000);
       await page.locator("//input[@name='user_name']").fill("admin");
       page.locator("//input[@name='user_password']").pressSequentially('admin',{delay:100});
       await page.waitForTimeout(2000);

})