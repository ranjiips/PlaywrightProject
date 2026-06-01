import { Page } from '@playwright/test';

export class KorberInvControlPage {
  constructor(private page: Page) {}

  async verifyInvControlMenu() {
    await this.page.waitForSelector('div.noselect:text("Inventory Adjust")');
    console.log('Inv Control submenu loaded successfully.');
  }

    /**
   * Generic method to click any Inv Control submenu option
   * @param optionName - The visible text of the submenu option (e.g. "Inventory Adjust")
   */
  async clickOption(optionName: string) {
    await this.page.click(`div.noselect:text("${optionName}")`);
    console.log(`Navigated to ${optionName}.`);
  }
}