import {TIMEOUT, PAGE_TITLE} from '../../common/constants';
import {error} from './elements';
import {loginInfo} from '../../test-data/user';

export default {
  // Do login
  doLogin: function(browser, info = loginInfo) {
  let login = browser.page.login();
  return login.goto()
    .fillInForm(info)
    .submit();
  },
  fillInForm: function(info) {
    return this.waitForElementVisible('@username', TIMEOUT)
          .setValue('@username', info.username)
          .setValue('@password', info.password);
  },
  shouldNavigateToHomePage: function() {
    return this.waitForElementNotPresent('@username', TIMEOUT)
          .isAt(PAGE_TITLE.HOME);
  },
  submit: function() {
    return this.click('@submit');
  },
  shouldShowErrorMessage: function(errorMessage) {
    return this.waitForElementPresent(error.selector, TIMEOUT)
          .verify.containsText('@error', errorMessage);
  },
};
