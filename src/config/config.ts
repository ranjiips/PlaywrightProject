export const config = {
  baseURL: 'https://odwlogistics.usetest.koerbercloud.com/core/Default.html',
  username: '',
  password: '',
  accountName: '',
  browser: 'chromium', // can be 'chromium', 'firefox', or 'webkit'
  environment: 'test',  // e.g., 'dev', 'test', 'prod'

  // Phase-specific timeouts
  spinnerTimeout: 300000,   // 5 minutes for spinner/loading phases
  loadingTimeout: 300000,   // 5 minutes for app loading screen
  validationTimeout: 60000  // 1 minute for actual dashboard validations
};