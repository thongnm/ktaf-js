import home from '../test-cases/home/';
const homeSuite = {
  ...home.setup,
  'Logout success': home.logoutSuccess,
  'Menu visible': home.menuVisible,
  'Valid assessment period': home.validAssessmentPeriod,
};
export default homeSuite;
