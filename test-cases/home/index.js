import {TIMEOUT, PAGE_TITLE} from '../../common/constants';
import setup from './setup';
import {columnHeaders} from './data';

// Logout success
const logoutSuccess = (browser) => {
  let home = browser.page.home();
  const {logoutLink} = home.elements;
  home.navigate()
    .waitForElementVisible(logoutLink.selector, TIMEOUT)
    .logout()
    .waitForElementNotPresent(logoutLink.selector, TIMEOUT);

  browser.assert.title(PAGE_TITLE.LOGIN);

  browser.end();
};

// Should valid assessment period
const validAssessmentPeriod = (browser) => {
  let home = browser.page.home();
  home.checkAssessmentPeriod();

  browser.end();
};

// Menu visible
const menuVisible = (browser) => {
  let menu = browser.page.home().section.menu;
  browser.getText(menu.elements.home.selector, (text) => {
    browser.assert.equal(text.value, 'Home');
  });
  browser.getText(menu.elements.provide_feedback.selector, (text) => {
    browser.assert.equal(text.value, 'Provide Feedback');
  });

  browser.end();
};

// Dealine setting
const deadlineSetting = (browser) => {
  const xpath = `//div[@class='prepend-4 span-17 append-4']`;
  const datagrid = browser.page.home()
        .getDataGridSection(xpath);
  datagrid.getColumns((columns) => {
    browser.assert.deepEqual(columnHeaders, columns);
  });
  browser.end();
};

export default {
  logoutSuccess,
  menuVisible,
  validAssessmentPeriod,
  deadlineSetting,
  setup,
};
