import { user } from '../test-data/user';
import { LOGIN_TIMEOUT } from '../common/constants';

const testCases = {
    'Login Success': (browser) => {
    var login = browser.page.login();
    const { error, username } = login.elements
    login.navigate()
      .waitForElementVisible(username.selector, LOGIN_TIMEOUT)
      .fillInForm(user)
      .submit()
      .waitForElementNotPresent(username.selector, LOGIN_TIMEOUT);

    browser.end();
  },
  'Login Fail': (browser) => {
    var login = browser.page.login();
    const { error, username } = login.elements
    login.navigate()
      .waitForElementVisible(username.selector, LOGIN_TIMEOUT)
      .fillInForm({})
      .submit()
      .waitForElementPresent(error.selector, LOGIN_TIMEOUT);

    browser.end();
  },
}
export default testCases;