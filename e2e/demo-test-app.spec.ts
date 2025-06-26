import { test, expect } from '@playwright/test';

test('renders the heading', async ({ page }) => {
  await page.goto('/');
  const heading = page.getByRole('heading', { name: /hello, next\.js!/i });
  expect(heading).toBeTruthy();
});
