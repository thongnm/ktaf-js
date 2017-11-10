import { TIMEOUT, LOGIN_PAGE_TITLE } from '../../common/constants';
import setup from './setup';

// Can logout 
const can_logout = (browser) => {
  var home = browser.page.Home();
  const { logoutLink } = home.elements
  home.navigate()
    .waitForElementVisible(logoutLink.selector, TIMEOUT)
    .logout()
    .waitForElementNotPresent(logoutLink.selector, TIMEOUT);
  
  browser.assert.title(LOGIN_PAGE_TITLE);

  browser.end();
}

export default { 
  can_logout,
  ...setup,
}