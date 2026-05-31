export const selectors = {
  login: {
    headerBrand: '#kc-header-wrapper',
    headerTitle: '#kc-page-title',
    usernameInput: '#username',
    passwordInput: '#password',
    signInButton: '#kc-login'
  },

  spinner: {
    container: '[data-hj-test-id="processing-dialog-container"]'
  },

  loadingScreen: {
    container: '.hj-loading-screen',
    message: 'text=Loading Applications',
    appLoadedItems: 'li span:text("Loaded")'
  },

  dashboard: {
    logo: '[data-hj-test-id="hj-brand-logo"] img',
    userName: '[data-hj-test-id="account-menu"] .name',
    homePageTitle: '[data-hj-test-id="hj-active-thread-title"]',
    leftMenuItems: "//div[@data-hj-test-id='menuView']//li[contains(@data-bind, 'visible') or @class='fixed']",
    
    // logout selectors
    profileToggle: 'a.dropdown-toggle >> i.fa-user',
    accountMenu: '[data-hj-test-id="account-menu-content"]',
    logoutButton: '[data-hj-test-id="account-menu-content"] li >> text=Logout'
  
  },

    logoutDialog: {
    container: '[data-hj-test-id="information-dialog-container"]',
    title: '[data-hj-test-id="information-dialog-title"]',
    confirmButton: '[data-hj-test-id="information-dialog-confirm-button"] button',
    cancelButton: '[data-hj-test-id="information-dialog-cancel-button"] button'
  }

};