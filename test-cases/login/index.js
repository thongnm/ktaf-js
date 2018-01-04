import {loginInfo} from '../../test-data/user';
import {loginErrorMsg} from '../../common/messages';
import {doLogin} from '../../page-objects/login/commands';

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
  loginSuccess,
  loginFail,
};
