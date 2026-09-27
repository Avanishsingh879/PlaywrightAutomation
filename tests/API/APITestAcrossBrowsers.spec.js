//API Test Across Browsers
//Postman, RestAssured, and SoapUI cannot test how APIs behave across different browsers.
//Playwright ensures API + UI compatibility across Chromium, Firefox, and WebKit (Safari).

import{test ,expect,requet} from "@playwright/test"

test('Validate API response in different browsers',async({browser})=>{

         const context=await browser.newContext();
         const request=context.request;
         const res=await request.get('https://jsonplaceholder.typicode.com/posts/1');

         expect(res.status()).toBe(200);
         
})