import { Page } from '@playwright/test';
import { selectors } from '../utils/selectors';

export class ForkIdentifierPage {
  constructor(private page: Page) {}

  async verifyScreen() {
    await this.page.waitForSelector(
      selectors.korber.screenParagraph('Scan your Fork identifier.'),
      { timeout: 30000 }
    );
    console.log('Fork Identifier screen verified');
  }

  async enterForkId(forkId: string) {
    await this.page.locator(selectors.korber.textInput).fill(forkId);
    await this.page.locator(selectors.korber.submitBtn).click();
    console.log(`Fork ID entered: ${forkId}`);

    // Wait for Main Menu
    await this.page.waitForSelector(
      selectors.korber.menuTile('Inv Control'),
      { timeout: 30000 }
    );
    console.log('Main Menu loaded');
  }
}