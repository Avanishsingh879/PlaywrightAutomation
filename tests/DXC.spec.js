import{test,expect} from "@playwright/test"

const testdata1=JSON.parse(JSON.stringify(require("./TestData1.json")))

test('verify Login',async({browser})=>{

       const context=await browser.newContext({

        viewport:{width:1980,height:1020}
       })

       const page=await context.newPage();
       await page.goto("http://localhost:8888/");
       const uname=await page.locator("//input[@name='user_name']");
       uname.fill(testdata1.username);
       const pwd=await page.locator("//input[@name='user_password']");
       pwd.fill(testdata1.password);

})





