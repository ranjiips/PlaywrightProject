import { Page } from '@playwright/test';
import { KorberHelper } from '../utils/korberHelper';
import { selectors } from '../utils/selectors';

export class SessionHandlerPage {
  private helper: KorberHelper;

  constructor(private page: Page) {
    this.helper = new KorberHelper(page);
  }

  async handleKorberLogin() {
    await this.page.waitForTimeout(2000);

    // Case 1: Login form visible → fill and submit
    if (await this.page.locator(selectors.korber.loginForm).isVisible()) {
      console.log('Login form detected → filling credentials');
      await this.doKorberLogin();
      return;
    }

    // Case 2: Already on Fork Identifier → nothing to do
    if (await this.page.locator(
      selectors.korber.screenParagraph('Scan your Fork identifier.')
    ).isVisible()) {
      console.log('Already on Fork Identifier → skipping login');
      return;
    }

    // Case 3: Any other screen → Cancel until login form
    console.log('Other screen detected → pressing Cancel until login form');
    await this.helper.pressCancelUntil(selectors.korber.loginForm);
    await this.doKorberLogin();
  }

  private async doKorberLogin() {
    await this.page.locator(selectors.korber.loginFormUrlInput).nth(0)
      .fill('https://odwlogistics.usetest.koerbercloud.com/');
    await this.page.locator(selectors.korber.loginFormUrlInput).nth(1)
      .fill('WA.Log-on');
    await this.page.locator(selectors.korber.loginFormSubmitBtn).click();
    console.log('Körber login submitted');

    await this.helper.verifyScreenByParagraph('Scan your Fork identifier.');
    console.log('Fork Identifier screen loaded');
  }

  async pressCancelUntilLoginScreen() {
    console.log('Pressing Cancel to return to Körber login screen...');
    await this.helper.pressCancelUntil(selectors.korber.loginForm);
    console.log('Returned to Körber login screen');
  }
}