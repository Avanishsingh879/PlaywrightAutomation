import{test,expect,request} from "@playwright/test"
//https://jsonplaceholder.typicode.com/posts/1

test('Validate Get Request',async({request})=>{

       const Res=await request.get('https://jsonplaceholder.typicode.com/posts/1');
       expect( Res.status()).toBe(200);


})

test('Launch Browser',async({browser})=>{

     const context=await browser.newContext({

        viewport:{width:1980,height:1020}
     })

     const page=await context.newPage();
     await page.goto('http://localhost:8888/');
     await page.waitForTimeout(1000);
})
