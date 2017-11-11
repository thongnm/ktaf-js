import login from '../test-cases/login/';

const loginSuite = {
  'Login Success': login.loginSuccess,
  'Login Fail': login.loginFail,
};
export default loginSuite;
