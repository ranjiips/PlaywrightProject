import { Page } from '@playwright/test';
import { selectors } from '../utils/selectors';

export class MenuPage {
  constructor(private page: Page) {}

  async openMenu() {
    await this.page.click(selectors.menu.toggleButton);
    await this.page.waitForSelector(selectors.menu.menuContent);
    console.log('Menu opened');
  }

  async selectKorberOneMobile() {
    await this.page.click(selectors.menu.korberOneMobile);
    await this.page.waitForTimeout(1000);
    console.log('Körber One Mobile selected');
  }

  async clickLogin() {
    await this.page.click(selectors.menu.loginOption);
    await this.page.waitForTimeout(2000);
    console.log('Login clicked');
  }
}