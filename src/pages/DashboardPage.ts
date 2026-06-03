import { Page, expect, test } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { config } from '../config/config';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifyDashboard(accountName: string) {
    await expect(this.page.locator(selectors.dashboard.logo)).toBeVisible();
    await expect(this.page.locator(selectors.dashboard.userName)).toHaveText(accountName);
    await expect(this.page.locator(selectors.dashboard.homePageTitle)).toHaveText('Home Page');
    const menuItems = this.page.locator(selectors.dashboard.leftMenuItems);
    await expect(menuItems).toHaveCount(14);
  }

  async logout() {
    await this.page.locator(selectors.dashboard.profileToggle).click();
    await this.page.locator(selectors.dashboard.logoutButton).click();

    await this.page.locator(selectors.logoutDialog.container)
      .waitFor({ state: 'visible', timeout: config.validationTimeout });
    await expect(this.page.locator(selectors.logoutDialog.title)).toHaveText('Logout');

    await this.page.locator(selectors.logoutDialog.confirmButton).click();

    await expect(this.page.locator(selectors.login.headerTitle))
      .toHaveText('Sign in to your account', { timeout: config.loadingTimeout });
  }

  async captureDashboardScreenshot() {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await test.info().attach('Dashboard Page', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
}