import { test, expect } from '@playwright/test';

test('POST API request', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      name: 'John',
      email: 'john@example.com'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  console.log(body);
});