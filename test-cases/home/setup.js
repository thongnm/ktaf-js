import { TIMEOUT } from '../../common/constants';
import { loginInfo } from '../../test-data/user';

const before = function(browser) {
  
}
const after = function(browser) {

}
const beforeEach = function(browser) {
  var login = browser.page.Login();
  const { error, username } = login.elements
  login.navigate()
    .waitForElementVisible(username.selector, TIMEOUT)
    .fillInForm(loginInfo)
    .submit()
    .waitForElementNotPresent(username.selector, TIMEOUT);
}
const afterEach = function() {
  
}
export default { 
  before,
  beforeEach,
  afterEach,
  after,
}