export const selectors = {

  // ── Infios Login ──
  login: {
    headerBrand: '#kc-header-wrapper',
    headerTitle: '#kc-page-title',
    usernameInput: '#username',
    passwordInput: '#password',
    signInButton: '#kc-login'
  },

  // ── Spinner & Loading ──
  spinner: {
    container: '[data-hj-test-id="processing-dialog-container"]'
  },

  loadingScreen: {
    container: '.hj-loading-screen',
    message: 'text=Loading Applications',
    appLoadedItems: 'li span:text("Loaded")'
  },

  // ── Infios Dashboard ──
  dashboard: {
    logo: '[data-hj-test-id="hj-brand-logo"] img',
    userName: '[data-hj-test-id="account-menu"] .name',
    homePageTitle: '[data-hj-test-id="hj-active-thread-title"]',
    leftMenuItems: "//div[@data-hj-test-id='menuView']//li[contains(@data-bind, 'visible') or @class='fixed']",
    profileToggle: 'a.dropdown-toggle >> i.fa-user',
    accountMenu: '[data-hj-test-id="account-menu-content"]',
    logoutButton: '[data-hj-test-id="account-menu-content"] li >> text=Logout'
  },

  // ── Logout Dialog ──
  logoutDialog: {
    container: '[data-hj-test-id="information-dialog-container"]',
    title: '[data-hj-test-id="information-dialog-title"]',
    confirmButton: '[data-hj-test-id="information-dialog-confirm-button"] button',
    cancelButton: '[data-hj-test-id="information-dialog-cancel-button"] button'
  },

  // ── Infios Side Menu ──
  menu: {
    toggleButton: '#menuButtonToggle',
    menuContent: '.menu-content',
    korberOneMobile: 'span.title:has-text("Körber One Mobile")',
    loginOption: 'span.title:has-text("Login")'
  },

  // ── Körber One Mobile — Common ──
  korber: {
    // Login form
    loginForm: '#LoginForm',
    loginFormUrlInput: '#LoginForm input.k-textbox',
    loginFormSubmitBtn: '#LoginForm button.k-button',

    // Common screen elements
    heading: 'div.heading span',
    paragraph: 'div.paragraph span',
    prompt: 'div.prompt span',
    textInput: 'div.inputTextbox input.k-textbox',
    submitBtn: 'div.submitEntry button.k-button',

    // Dynamic selectors — functions
    menuTile: (text: string) => `div.noselect:has-text("${text}")`,
    screenParagraph: (text: string) => `div.paragraph span:has-text("${text}")`,
    screenPrompt: (text: string) => `div.prompt span:has-text("${text}")`,
    functionKeyLink: (label: string) => `#listOfHighlightedKeys a:has-text("${label}")`
  }

};