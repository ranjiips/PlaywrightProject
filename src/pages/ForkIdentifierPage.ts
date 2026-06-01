import { Page } from '@playwright/test';

export class ForkIdentifierPage {
  constructor(private page: Page) {}

  async verifyScreen() {
    await this.page.waitForSelector('span:text("Scan your Fork identifier.")');
  }

  async enterForkId(forkId: string) {
    await this.page.fill('input.k-textbox', forkId);
    await this.page.click('button.k-button:has-text("Submit")');
    console.log(`Fork Identifier ${forkId} entered and submitted.`);
  }
}