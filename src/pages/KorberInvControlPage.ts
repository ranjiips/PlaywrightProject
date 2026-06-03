import { Page } from '@playwright/test';
import { KorberHelper } from '../utils/korberHelper';
import { selectors } from '../utils/selectors';

export class KorberInvControlPage {
  private helper: KorberHelper;

  constructor(private page: Page) {
    this.helper = new KorberHelper(page);
  }

  async verifyInvControlMenu() {
    await this.helper.verifyScreenByHeading('Inv Control');
  }

  async clickInventoryAdjust() {
    await this.helper.clickMenuTile(
      'Inventory Adjust',
      selectors.korber.screenPrompt('ANY VALUE')
    );
  }
}