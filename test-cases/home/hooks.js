import {doLogin} from '../login/';

const before = function(browser) {

};
const after = function(browser) {

};
const beforeEach = function(browser) {
  doLogin(browser);
};
const afterEach = function() {

};
export default {
  before,
  beforeEach,
  afterEach,
  after,
};
