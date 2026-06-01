import { Page } from '@playwright/test';

export class KorberInventoryAdjustPage {
  constructor(private page: Page) {}

  async verifyInventoryAdjustScreen() {
    await this.page.waitForSelector('span:text("Inventory Adjustment")');
    console.log('Inventory Adjustment screen loaded successfully.');
  }

  async enterLocationOrLP(value: string) {
    await this.page.fill('input.k-textbox', value);
    await this.page.click('button.k-button:has-text("Submit")');
    console.log(`Entered ${value} and submitted (Location/LP/MLP).`);
  }

  async enterItemId(itemId: string) {
    await this.page.waitForSelector('span:text("ITEM ID")');
    await this.page.fill('input.k-textbox', itemId);
    await this.page.click('button.k-button:has-text("Submit")');
    console.log(`Entered Item ID ${itemId} and submitted.`);
  }

  async selectAdjustmentType(type: 'INCREMENT' | 'DECREMENT' | 'UPDATE QTY') {
    await this.page.waitForSelector(`div.noselect:text("${type}")`);
    await this.page.click(`div.noselect:text("${type}")`);
    console.log(`Selected Adjustment Type: ${type}`);
  }

  async enterQuantity(qty: string) {
    await this.page.waitForSelector('span:text("EA")');
    await this.page.fill('input.k-textbox', qty);
    await this.page.click('button.k-button:has-text("Submit")');
    console.log(`Entered quantity ${qty} and submitted.`);
  }

    async openReasonCodeList() {
    await this.page.click('div.functionKey:has-text("LST")');
    console.log('Opened Reason Code list using LST function key.');
  }

  async selectReasonCode(reason: string) {
    await this.page.waitForSelector(`div.noselect:text("${reason}")`);
    await this.page.click(`div.noselect:text("${reason}")`);
    console.log(`Selected Reason Code: ${reason}`);
  }

//   async submitReasonCode() {
//     await this.page.click('button.k-button:has-text("Submit")');
//     console.log('Submitted Reason Code.');
//   }

    async confirmTransaction() {
    await this.page.waitForSelector('span:text("ENTER:Confirm")');
    await this.page.click('button.k-button:has-text("Submit")');
    console.log('Transaction confirmed and completed.');
  }


}