import {getAssessmentPeriodString} from '../../test-data/pa';
import dynamicSection from '../../common/helper';
import datagrid from '../components/datagrid';

export default {
  logout: function() {
    return this.click('@logoutLink');
  },
  checkAssessmentPeriod: function() {
    this.getText('@assessmentPeriod', (result) => {
      getAssessmentPeriodString((error, data) => {
        this.assert.equal(result.value, `Assessment Period:${data}`);
      });
    });
  },
  getDataGridSection: function(selector) {
    return dynamicSection(datagrid, selector);
  },
};
