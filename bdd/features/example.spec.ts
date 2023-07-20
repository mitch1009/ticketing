import { test, expect } from '@playwright/test';

test("should visit opher website", async ({page}) => {
  await page.goto('https://opher.co.za/')
  await expect(page).toHaveTitle("Opher || The future of Work is here")
})