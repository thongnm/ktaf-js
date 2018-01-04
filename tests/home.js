import home from '../test-cases/home/';
const homeSuite = {
  ...home.hooks,
  'Logout success': home.logoutSuccess,
  'Valid menu items': home.menuVisible,
  'Valid assessment period': home.validAssessmentPeriod,
  'Valid deadline setting': home.deadlineSetting,
};
export default homeSuite;
