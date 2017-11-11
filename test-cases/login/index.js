import {TIMEOUT} from '../../common/constants';
import {loginInfo} from '../../test-data/user';
import {loginErrorMsg} from '../../common/messages';

// Login success
const loginSuccess = (browser) => {
  let login = browser.page.login();
  const {username} = login.elements;
  login.navigate()
    .waitForElementVisible(username.selector, TIMEOUT)
    .fillInForm(loginInfo)
    .submit()
    .waitForElementNotPresent(username.selector, TIMEOUT);

  browser.end();
};

// Login fail
const loginFail = (browser) => {
  let login = browser.page.login();
  const {error, username} = login.elements;
  login.navigate()
    .waitForElementVisible(username.selector, TIMEOUT)
    .fillInForm({})
    .submit()
    .waitForElementPresent(error.selector, TIMEOUT)
    .validateError(loginErrorMsg);

  browser.end();
};

export default {
  loginSuccess,
  loginFail,
};
