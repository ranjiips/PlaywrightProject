import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';
import { MenuPage } from './MenuPage';
import { SessionHandlerPage } from './SessionHandlerPage';
import { ForkIdentifierPage } from './ForkIdentifierPage';
import { KorberMainMenuPage } from './KorberMainMenuPage';
import { KorberInvControlPage } from './KorberInvControlPage';
import { KorberInventoryAdjustPage } from './KorberInventoryAdjustPage';
import { KorberHelper } from '../utils/korberHelper';

export class Pages {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  menuPage: MenuPage;
  sessionHandlerPage: SessionHandlerPage;
  forkIdentifierPage: ForkIdentifierPage;
  korberMainMenuPage: KorberMainMenuPage;
  korberInvControlPage: KorberInvControlPage;
  korberInventoryAdjustPage: KorberInventoryAdjustPage;
  korberHelper: KorberHelper;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.menuPage = new MenuPage(page);
    this.sessionHandlerPage = new SessionHandlerPage(page);
    this.forkIdentifierPage = new ForkIdentifierPage(page);
    this.korberMainMenuPage = new KorberMainMenuPage(page);
    this.korberInvControlPage = new KorberInvControlPage(page);
    this.korberInventoryAdjustPage = new KorberInventoryAdjustPage(page);
    this.korberHelper = new KorberHelper(page);
  }
}