import {loginInfo} from '../../test-data/user';
import {loginErrorMsg} from '../../common/messages';

// Do login
const doLogin = (browser, info = loginInfo) => {
  let login = browser.page.login();
  return login.goto()
    .fillInForm(info)
    .submit();
};

// Login success
const loginSuccess = (browser) => {
  // Login with valid info
  doLogin(browser, loginInfo).shouldNavigateToHomePage();
  browser.end();
};

// Login fail
const loginFail = (browser) => {
  // Login with invalid info
  doLogin(browser, {}).shouldShowErrorMessage(loginErrorMsg);
  browser.end();
};

export default {
  doLogin,
  loginSuccess,
  loginFail,
};
