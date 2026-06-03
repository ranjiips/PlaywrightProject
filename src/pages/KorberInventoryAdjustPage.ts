import { Page } from '@playwright/test';
import { KorberHelper } from '../utils/korberHelper';
import { selectors } from '../utils/selectors';

export class KorberInventoryAdjustPage {
  private helper: KorberHelper;

  constructor(private page: Page) {
    this.helper = new KorberHelper(page);
  }

  async enterLocationOrLP(value: string) {
    await this.helper.verifyScreenByPrompt('ANY VALUE');
    await this.page.locator(selectors.korber.textInput).fill(value);
    await this.page.locator(selectors.korber.submitBtn).click();
    console.log(`LPN entered: ${value}`);
    await this.helper.verifyScreenByPrompt('ITEM ID');
  }

  async enterItemId(itemId: string) {
    await this.page.locator(selectors.korber.textInput).fill(itemId);
    await this.page.locator(selectors.korber.submitBtn).click();
    console.log(`Item ID entered: ${itemId}`);
    await this.helper.verifyScreenByParagraph('Select Adjustment Type');
  }

  async selectAdjustmentType(type: string) {
    await this.helper.clickMenuTile(
      type,
      selectors.korber.screenPrompt('EA')
    );
  }

  async enterQuantity(qty: string) {
    await this.page.locator(selectors.korber.textInput).fill(qty);
    await this.page.locator(selectors.korber.submitBtn).click();
    console.log(`Quantity entered: ${qty}`);
    await this.helper.verifyScreenByPrompt('REASON CODE');
  }

  async clickLSTButton() {
    await this.helper.clickFunctionKey('LST');
    await this.helper.verifyScreenByHeading('INCREMENT');
    await this.page.waitForSelector(
      selectors.korber.menuTile('DA DEMO'),
      { timeout: 30000 }
    );
    console.log('Reason code list loaded');
  }

  async selectReasonCode(reasonCode: string) {
    await this.helper.clickMenuTile(
      reasonCode,
      selectors.korber.screenPrompt('ENTER:Confirm')
    );
  }

  async confirmTransaction() {
    await this.helper.verifyScreenByPrompt('ENTER:Confirm');
    await this.page.locator(selectors.korber.submitBtn).click();
    console.log('Transaction confirmed');
  }
}