import home from '../test-cases/home/';
const homeSuite = {
  ...home.setup,
  'Logout success': home.logout_success,
  'Menu visible': home.menu_visible,
  'Valid assessment period': home.valid_assessment_period,
}
export default homeSuite;