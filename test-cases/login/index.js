import { TIMEOUT } from '../../common/constants';
import { loginInfo } from '../../test-data/user';
import { loginErrorMsg } from '../../common/messages';

// Login success 
const login_success = (browser) => {
  var login = browser.page.Login();
  const { error, username } = login.elements
  login.navigate()
    .waitForElementVisible(username.selector, TIMEOUT)
    .fillInForm(loginInfo)
    .submit()
    .waitForElementNotPresent(username.selector, TIMEOUT);

  browser.end();
}

// Login fail
const login_fail = (browser) => {
  var login = browser.page.Login();
  const { error, username } = login.elements
  login.navigate()
    .waitForElementVisible(username.selector, TIMEOUT)
    .fillInForm({})
    .submit()
    .waitForElementPresent(error.selector, TIMEOUT)
    .validateError(loginErrorMsg);

  browser.end();
}

export default { 
  login_success,
  login_fail,
}