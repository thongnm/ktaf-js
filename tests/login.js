import login from '../test-cases/login/';

const loginSuite = {
  'Login Success': login.login_success,
  'Login Fail': login.login_fail,
}
export default loginSuite;