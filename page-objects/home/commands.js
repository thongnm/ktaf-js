import {getAssessmentPeriodString} from '../../test-data/pa';

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
};
