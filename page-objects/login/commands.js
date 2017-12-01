import {TIMEOUT, PAGE_TITLE} from '../../common/constants';
import {username, error} from './elements';

export default {
  fillInForm: function(info) {
    return this.waitForElementVisible(username.selector, TIMEOUT)
          .setValue('@username', info.username)
          .setValue('@password', info.password);
  },
  shouldNavigateToHomePage: function() {
    return this.waitForElementNotPresent(username.selector, TIMEOUT)
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
