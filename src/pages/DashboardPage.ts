import { Page, expect, test } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { config } from '../config/config';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifyDashboard(accountName: string) {
    // Logo visible
    await expect(this.page.locator(selectors.dashboard.logo)).toBeVisible();

    // Username visible
    await expect(this.page.locator(selectors.dashboard.userName)).toHaveText(accountName);

    // Home Page title visible
    await expect(this.page.locator(selectors.dashboard.homePageTitle)).toHaveText('Home Page');

    // Left menu items present
    const menuItems = this.page.locator(selectors.dashboard.leftMenuItems);
    await expect(menuItems).toHaveCount(14);
  }

 async logout() {
    // Step 1: Click profile icon
    await this.page.locator(selectors.dashboard.profileToggle).click();

    // Step 2: Click Logout in account menu
    await this.page.locator(selectors.dashboard.logoutButton).click();

    // Step 3: Wait for confirmation dialog
    await this.page.locator(selectors.logoutDialog.container).waitFor({ state: 'visible', timeout: config.validationTimeout });
    await expect(this.page.locator(selectors.logoutDialog.title)).toHaveText('Logout');

    // Step 4: Confirm logout
    await this.page.locator(selectors.logoutDialog.confirmButton).click();

    // // Step 5: Spinner cycle after logout
    // await this.page.locator(selectors.spinner.container).waitFor({ state: 'visible', timeout: config.spinnerTimeout });
    // await this.page.locator(selectors.spinner.container).waitFor({ state: 'hidden', timeout: config.spinnerTimeout });

    // Step 6: Verify login screen is back
    await expect(this.page.locator(selectors.login.headerTitle)).toHaveText('Sign in to your account', { timeout: config.loadingTimeout });
  }

  async captureDashboardScreenshot() {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await test.info().attach('Dashboard Page', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
}