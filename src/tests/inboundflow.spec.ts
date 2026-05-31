import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { queryDB } from '../utils/db';

test('Inbound flow validation', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('admin', 'password');

  //UI validation
  await expect(page.locator('#dashboard')).toBeVisible();

  //DB validation
const status = 'processed';
const rows = await queryDB(`SELECT * FROM inbound_orders WHERE status='${status}'`);
expect(rows.length).toBeGreaterThan(0);
});