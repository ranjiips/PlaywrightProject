import { test } from '@playwright/test';
import { Pages } from '../pages/Pages';
import { config } from '../config/config';

test.describe('Warehouse Login Flow', () => {
  test('should login, navigate, and perform inventory adjust', async ({ page }) => {
    test.setTimeout(0);

    const pages = new Pages(page);

    const username = config.username;
    const password = config.password;
    const accountName = config.accountName;

    // Step 1: Actual login
    await pages.loginPage.goto();
    await pages.loginPage.verifyLoginScreen();
    await pages.loginPage.login(username, password);

    // Step 2: Dashboard
    await pages.dashboardPage.verifyDashboard(accountName);

    // Step 3: Navigate to Körber One Mobile → Login
    await pages.menuPage.openMenu();
    await pages.menuPage.selectKorberOneMobile();
    await pages.menuPage.clickLogin();

    // Step 4: Adaptive session handling
    await pages.sessionHandlerPage.handleSession();

    // Step 5: Fork Identifier screen
    await pages.forkIdentifierPage.verifyScreen();
    await pages.forkIdentifierPage.enterForkId('ABFL');

    // Step 6: Main Menu
    await pages.korberMainMenuPage.verifyMainMenu();
    await pages.korberMainMenuPage.clickInvControl();

    // Step 7: Inventory Control submenu
    await pages.korberInvControlPage.verifyInvControlMenu();
    await pages.korberInvControlPage.clickOption('Inventory Adjust');

    // Step 8: Inventory Adjustment flow
    await pages.korberInventoryAdjustPage.verifyInventoryAdjustScreen();
    await pages.korberInventoryAdjustPage.enterLocationOrLP('LP1002602');

    // Step 9: Enter Item ID
    await pages.korberInventoryAdjustPage.enterItemId('I000549');

    // Step 10: Select Adjustment Type
    await pages.korberInventoryAdjustPage.selectAdjustmentType('INCREMENT');

    // Step 11: Enter Quantity
    await pages.korberInventoryAdjustPage.enterQuantity('10');

    // Step 12: Reason Code
    await pages.korberInventoryAdjustPage.openReasonCodeList();
    await pages.korberInventoryAdjustPage.selectReasonCode('DA DEMO');
// await pages.korberInventoryAdjustPage.submitReasonCode();

    // Step 13: Final confirmation
    await pages.korberInventoryAdjustPage.confirmTransaction();

    // Step 14: Press Cancel until Körber One Login screen
    await pages.sessionHandlerPage.pressCancelUntilLogin();

    // Step: Logout
    await pages.dashboardPage.logout();
  });
});