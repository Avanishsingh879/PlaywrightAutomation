import { test, expect } from '@playwright/test';

test('PUT API request', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      name: 'John Updated',
      email: 'john.updated@example.com'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  expect(response.ok()).toBeTruthy();

  console.log('Status:', response.status());
  console.log('Response:', await response.json());
});