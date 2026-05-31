import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { config } from '../config/config';

test.describe('Warehouse Login Flow', () => {
  test('should login, verify dashboard, and logout', async ({ page }) => {
    test.setTimeout(0); // no global cap on test duration
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.captureLoginScreenshot();
    await loginPage.verifyLoginScreen();
    await loginPage.login();

    await dashboardPage.verifyDashboard(config.accountName);
    await dashboardPage.captureDashboardScreenshot();
    await dashboardPage.logout();
  });
});