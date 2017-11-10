import home from '../test-cases/home/';
const homeSuite = {
  before: home.before,
  after: home.after,
  'Can logout': home.can_logout,
}
export default homeSuite;