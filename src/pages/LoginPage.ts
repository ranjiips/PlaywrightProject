import { Page, expect, test } from '@playwright/test';
import { config } from '../config/config';
import { selectors } from '../utils/selectors';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(config.baseURL);
  }

  async verifyLoginScreen() {
    await expect(this.page.locator(selectors.login.headerBrand))
      .toHaveText('odwlogistics', { timeout: config.validationTimeout });
    await expect(this.page.locator(selectors.login.headerTitle))
      .toHaveText('Sign in to your account', { timeout: config.validationTimeout });
  }

  async login(username: string, password: string) {
    await this.page.fill(selectors.login.usernameInput, username);
    await this.page.fill(selectors.login.passwordInput, password);
    await this.page.click(selectors.login.signInButton);

    // Spinner cycle
    await this.page.locator(selectors.spinner.container)
      .waitFor({ state: 'visible', timeout: config.spinnerTimeout });
    await this.page.locator(selectors.spinner.container)
      .waitFor({ state: 'hidden', timeout: config.spinnerTimeout });

    // Loading screen lifecycle
    await this.page.locator(selectors.loadingScreen.container)
      .waitFor({ state: 'visible', timeout: config.loadingTimeout });
    await expect(this.page.locator(selectors.loadingScreen.appLoadedItems))
      .toHaveCount(8, { timeout: config.loadingTimeout });
    await this.page.locator(selectors.loadingScreen.container)
      .waitFor({ state: 'hidden', timeout: config.loadingTimeout });

    // Dashboard ready
    await this.page.locator(selectors.dashboard.logo)
      .waitFor({ state: 'visible', timeout: config.validationTimeout });
  }

  async captureLoginScreenshot() {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await test.info().attach('Login Page', {
      body: screenshot,
      contentType: 'image/png'
    });
  }
}