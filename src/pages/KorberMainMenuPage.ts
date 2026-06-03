import { Page } from '@playwright/test';
import { KorberHelper } from '../utils/korberHelper';
import { selectors } from '../utils/selectors';

export class KorberMainMenuPage {
  private helper: KorberHelper;

  constructor(private page: Page) {
    this.helper = new KorberHelper(page);
  }

  async verifyMainMenu() {
    await this.helper.verifyScreenByHeading('Ashwini Biradar');
  }

  async clickInvControl() {
    await this.helper.clickMenuTile(
      'Inv Control',
      selectors.korber.menuTile('Inventory Adjust')
    );
  }
}