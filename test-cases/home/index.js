import hooks from './hooks';

// Logout success
const logoutSuccess = (browser) => {
  const home = browser.page.home();
  home.logout()
      .shouldNavigateToLoginPage();

  browser.end();
};

// Should valid assessment period
const validAssessmentPeriod = (browser) => {
  const home = browser.page.home();
  home.shouldValidAssessmentPeriod();

  browser.end();
};

// Menu visible
const menuVisible = (browser) => {
  const home = browser.page.home();
  home.shouldValidMenu();
  browser.end();
};

// Dealine setting
const deadlineSetting = (browser) => {
  const home = browser.page.home();
  home.shouldValidDeadlineSetting();
  browser.end();
};

export default {
  logoutSuccess,
  menuVisible,
  validAssessmentPeriod,
  deadlineSetting,
  hooks,
};
