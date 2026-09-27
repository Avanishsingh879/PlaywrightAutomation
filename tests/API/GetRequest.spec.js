import{test,expect,request} from "@playwright/test"

test('Validate Get Request',async({request})=>{

          const response=await request.get('https://jsonplaceholder.typicode.com/posts/1');
          expect(response.status()).toBe(200);

          const responsebody=await response.json();
          expect(responsebody.id).toBe(1);
})