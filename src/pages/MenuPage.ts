import { Page, expect, test } from '@playwright/test';
import { selectors } from '../utils/selectors';

export class MenuPage {
  constructor(private page: Page) {}

  async openMenu() {
    await this.page.click('#menuButtonToggle');
    await this.page.waitForSelector('.menu-content');
  }

  async selectKorberOneMobile() {
    await this.page.click('span.title:text("Körber One Mobile")');
    await this.page.waitForTimeout(1000);
  }

  async clickLogin() {
    await this.page.click('span.title:text("Login")');
  }
}