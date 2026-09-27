import { test, expect,request } from '@playwright/test';

test('Validate GET request', async ({ request }) => {
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect(response.status()).toBe(201);
    console.log("test passed");
    
});