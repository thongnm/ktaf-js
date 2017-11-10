import { TIMEOUT, PAGE_TITLE } from '../../common/constants';
import setup from './setup';

// Logout success
const logout_success = (browser) => {
  var home = browser.page.Home();
  const { logoutLink } = home.elements
  home.navigate()
    .waitForElementVisible(logoutLink.selector, TIMEOUT)
    .logout()
    .waitForElementNotPresent(logoutLink.selector, TIMEOUT);
  
  browser.assert.title(PAGE_TITLE.LOGIN);
  
  browser.end();
}

// Should valid assessment period
const valid_assessment_period = (browser) => {
  var home = browser.page.Home();
  var menu = home.section.menu;
  home.checkAssessmentPeriod();

  browser.end();
}

// Menu visible
const menu_visible = (browser) => {
  var menu = browser.page.Home().section.menu;
  browser.getText(menu.elements.home.selector, (text) => {
    browser.assert.equal(text.value,'Home');
  });
  browser.getText(menu.elements.provide_feedback.selector, (text) => {
    browser.assert.equal(text.value,'Provide Feedback');
  });

  browser.end();
}

export default { 
  logout_success,
  menu_visible,
  valid_assessment_period,
  setup,
}