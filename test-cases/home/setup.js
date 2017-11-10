import { TIMEOUT } from '../../common/constants';
import { loginInfo } from '../../test-data/user';
const before = function(browser) {
  var login = browser.page.Login();
  const { error, username } = login.elements
  login.navigate()
    .waitForElementVisible(username.selector, TIMEOUT)
    .fillInForm(loginInfo)
    .submit()
    .waitForElementNotPresent(username.selector, TIMEOUT);

}
const after = function(browser) {
  browser.end();
}
const beforeEach = function(browser) {
  
}
const afterEach = function(browser) {
  
}
export default { 
  before,
  beforeEach,
  afterEach,
  after,
}