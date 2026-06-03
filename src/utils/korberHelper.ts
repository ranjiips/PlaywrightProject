import { Page } from '@playwright/test';
import { selectors } from './selectors';

export class KorberHelper {
  constructor(private page: Page) {}

  // ── Click any menu tile / list button by its text ──
  async clickMenuTile(tileText: string, waitForPromptOrTile?: string) {
    await this.page.waitForSelector(
      selectors.korber.menuTile(tileText),
      { timeout: 30000 }
    );
    await this.page.locator(selectors.korber.menuTile(tileText)).click();
    console.log(`Menu tile clicked: ${tileText}`);

    // Optionally wait for next screen to load
    if (waitForPromptOrTile) {
      await this.page.waitForSelector(waitForPromptOrTile, { timeout: 30000 });
      console.log(`Next screen loaded: ${waitForPromptOrTile}`);
    }
  }

  // ── Click a function key by its label (Cancel, LST, ADD COMNT etc.) ──
  async clickFunctionKey(label: string) {
    await this.page.locator(selectors.korber.functionKeyLink(label)).click();
    console.log(`Function key clicked: ${label}`);
  }

  // ── Verify current screen by its prompt text ──
  async verifyScreenByPrompt(promptText: string, timeout = 30000) {
    await this.page.waitForSelector(
      selectors.korber.screenPrompt(promptText),
      { timeout }
    );
    console.log(`Screen verified — prompt: ${promptText}`);
  }

  // ── Verify current screen by its paragraph text ──
  async verifyScreenByParagraph(paragraphText: string, timeout = 30000) {
    await this.page.waitForSelector(
      selectors.korber.screenParagraph(paragraphText),
      { timeout }
    );
    console.log(`Screen verified — paragraph: ${paragraphText}`);
  }

  // ── Verify current screen by its heading text ──
  async verifyScreenByHeading(headingText: string, timeout = 30000) {
    await this.page.waitForSelector(
      `${selectors.korber.heading}:has-text("${headingText}")`,
      { timeout }
    );
    console.log(`Screen verified — heading: ${headingText}`);
  }

  // ── Press Cancel until a target screen appears ──
  async pressCancelUntil(targetSelector: string, maxAttempts = 20) {
    let attempts = 0;
    while (!(await this.page.locator(targetSelector).isVisible())) {
      if (attempts >= maxAttempts) {
        throw new Error(`Could not reach target screen after ${maxAttempts} Cancel presses`);
      }
      console.log(`Pressing Cancel (attempt ${attempts + 1})...`);
      await this.clickFunctionKey('Cancel');
      await this.page.waitForTimeout(1500);
      attempts++;
    }
    console.log(`Target screen reached: ${targetSelector}`);
  }
}