import {getAssessmentPeriodString} from '../../test-data/pa';
import {TIMEOUT, PAGE_TITLE} from '../../common/constants';
import dynamicSection from '../../common/helper';
import datagrid from '../components/datagrid';
import {logoutLink} from './elements';

export default {
  logout: function() {
    return this.waitForElementVisible(logoutLink.selector, TIMEOUT)
          .click('@logoutLink');
  },
  shouldNavigateToLoginPage: function() {
    return this.waitForElementNotPresent(logoutLink.selector, TIMEOUT)
          .assert.title(PAGE_TITLE.LOGIN);
  },
  shouldValidAssessmentPeriod: function() {
    return this.getText('@assessmentPeriod', (result) => {
      getAssessmentPeriodString((error, data) => {
        this.assert.equal(result.value, `Assessment Period:${data}`);
      });
    });
  },
  shouldValidMenu: function() {
    let {home, provideFeedback} = this.section.menu.elements;
    return this.getText(home.selector, (text) => {
      this.assert.equal(text.value, 'Home');
    }).getText(provideFeedback.selector, (text) => {
      this.assert.equal(text.value, 'Provide Feedback');
    });
  },
  shouldValidDeadlineSetting: function() {
    const {selector} = this.elements.deadlineGrid;
    const datagrid = this.getDataGridSection(selector);
    return datagrid.getColumns((columns) => {
      const expectedColumns = ['Steps', 'Description', 'Deadlines'];
      this.assert.deepEqual(columns, expectedColumns);
    });
  },
  getDataGridSection: function(selector) {
    return dynamicSection(datagrid, selector);
  },
};
