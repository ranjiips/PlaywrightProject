import { Page } from '@playwright/test';

export class SessionHandlerPage {
  constructor(private page: Page) {}

  async handleSession() {
    // Case 1: Fresh session → Login screen directly
    if (await this.page.locator('span:text("Körber One URL:")').isVisible()) {
      await this.doFreshLogin();
      return;
    }

    // Case 2: Function bar visible → existing session
    if (await this.page.locator('.functionKeysContainer').isVisible()) {
      console.log('Existing session detected, pressing Cancel until login screen appears...');
      
      // Keep pressing F1 Cancel until login screen shows
      while (!(await this.page.locator('span:text("Körber One URL:")').isVisible())) {
        await this.page.click('.functionKey:has-text("Cancel")');
        await this.page.waitForTimeout(1000); // small wait for screen transition
      }

      // Once login screen is visible → do fresh login
      await this.doFreshLogin();
      return;
    }

    // Case 3: Fork Identifier screen directly (rare edge case)
    if (await this.page.locator('span:text("Scan your Fork identifier.")').isVisible()) {
      console.log('Fork Identifier screen loaded directly.');
      await this.page.fill('input.k-textbox', 'ABFL'); // replace with test fork ID
      await this.page.click('button.k-button:has-text("Submit")');
    }
  }

  private async doFreshLogin() {
    await this.page.fill('input.k-textbox >> nth=0', 'https://odwlogistics.usetest.koerbercloud.com/');
    await this.page.fill('input.k-textbox >> nth=1', 'WA.Log-on');
    await this.page.click('button.k-button:has-text("Submit")');

    // After fresh login, expect Fork Identifier screen
    await this.page.waitForSelector('span:text("Scan your Fork identifier.")');
    console.log('Fresh login complete, Fork Identifier screen loaded.');
  }

    async pressCancelUntilLogin() {
    console.log('Pressing Cancel until Körber One Login screen appears...');
    while (!(await this.page.locator('span:text("Körber One URL:")').isVisible())) {
      await this.page.click('.functionKey:has-text("Cancel")');
      await this.page.waitForTimeout(1000); // wait for screen transition
    }
    console.log('Reached Körber One Login screen.');
  }

}