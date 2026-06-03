import { test } from '@playwright/test';
import { Pages } from '../pages/Pages';
import { config } from '../config/config';

test.describe('Warehouse Login Flow', () => {
  test('should login, navigate, and perform inventory adjust', async ({ page }) => {
    test.setTimeout(300000); // 5 minutes

    const pages = new Pages(page);

    // ── Step 1: Navigate to app ──
    await pages.loginPage.goto();

    // ── Step 2: Verify login screen and login ──
    await pages.loginPage.verifyLoginScreen();
    await pages.loginPage.login(config.username, config.password);

    // ── Step 3: Verify Dashboard ──
    await pages.dashboardPage.verifyDashboard(config.accountName);

    // ── Step 4: Navigate Menu → Körber One Mobile → Login ──
    await pages.menuPage.openMenu();
    await pages.menuPage.selectKorberOneMobile();
    await pages.menuPage.clickLogin();

    // ── Step 5: Handle Körber session ──
    // If login form → fill & submit
    // If other screen → press Cancel until login form, then fill & submit
    // If already on Fork Identifier → skip
    await pages.sessionHandlerPage.handleKorberLogin();

    // ── Step 6: Fork Identifier — enter EQUIPMENTZONE ──
    await pages.forkIdentifierPage.verifyScreen();
    await pages.forkIdentifierPage.enterForkId('ABFL');

    // ── Step 7: Main Menu → Inv Control ──
    await pages.korberMainMenuPage.verifyMainMenu();
    await pages.korberMainMenuPage.clickInvControl();

    // ── Step 8: Inv Control submenu → Inventory Adjust ──
    await pages.korberInvControlPage.verifyInvControlMenu();
    await pages.korberInvControlPage.clickInventoryAdjust();

    // ── Step 9: Enter LPN value ──
    await pages.korberInventoryAdjustPage.enterLocationOrLP('LP1002602');

    // ── Step 10: Enter Item ID ──
    await pages.korberInventoryAdjustPage.enterItemId('I000549');

    // ── Step 11: Select Adjustment Type ──
    await pages.korberInventoryAdjustPage.selectAdjustmentType('INCREMENT');

    // ── Step 12: Enter Quantity ──
    await pages.korberInventoryAdjustPage.enterQuantity('10');

    // ── Step 13: Click LST button → open Reason Code list ──
    await pages.korberInventoryAdjustPage.clickLSTButton();

    // ── Step 14: Select DA DEMO reason code ──
    await pages.korberInventoryAdjustPage.selectReasonCode('DA DEMO');

    // ── Step 15: Confirm Transaction ──
    await pages.korberInventoryAdjustPage.confirmTransaction();

    // ── Step 16: Press Cancel until back to Körber login screen ──
    await pages.sessionHandlerPage.pressCancelUntilLoginScreen();

    // ── Step 17: Logout from Infios ──
    await pages.dashboardPage.logout();
  });
});