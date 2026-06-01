import { Page } from '@playwright/test';

export class KorberMainMenuPage {
  constructor(private page: Page) {}

  async verifyMainMenu() {
    await this.page.waitForSelector('div.noselect:text("Inv Control")');
    console.log('Korber Main Menu loaded successfully.');
  }

  async clickReceipts() {
    await this.page.click('div.noselect:text("Receipts")');
    console.log('Navigated to Receipts.');
  }

  async clickPutaway() {
    await this.page.click('div.noselect:text("Putaway")');
    console.log('Navigated to Putaway.');
  }

  async clickReplenishment() {
    await this.page.click('div.noselect:text("Replenishment")');
    console.log('Navigated to Replenishment.');
  }

  async clickOrderPick() {
    await this.page.click('div.noselect:text("Order Pick")');
    console.log('Navigated to Order Pick.');
  }

  async clickPackAudit() {
    await this.page.click('div.noselect:text("Pack/Audit")');
    console.log('Navigated to Pack/Audit.');
  }

  async clickLoadShip() {
    await this.page.click('div.noselect:text("Load/Ship")');
    console.log('Navigated to Load/Ship.');
  }

  async clickInvControl() {
    await this.page.click('div.noselect:text("Inv Control")');
    console.log('Navigated to Inv Control.');
  }

  async clickMovement() {
    await this.page.click('div.noselect:text("Movement")');
    console.log('Navigated to Movement.');
  }

  async clickViewInventory() {
    await this.page.click('div.noselect:text("View Inventory")');
    console.log('Navigated to View Inventory.');
  }

  async clickPrinting() {
    await this.page.click('div.noselect:text("Printing")');
    console.log('Navigated to Printing.');
  }

  async clickAssets() {
    await this.page.click('div.noselect:text("Assets")');
    console.log('Navigated to Assets.');
  }
}