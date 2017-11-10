import connection from '../common/db';
import dateFormat from 'dateformat';
import { DATE_FORMAT } from '../common/constants';

export const getPaProgramData = (callback) => {
  const data = {};
  connection.connect((err) => {
    if (err) callback(err, null);
    const sql = 'select  * from paprograms';
    connection.query(sql, (err, result) => {
      if (err) callback(err, null);
      else callback(null, result)
    });
    connection.end();
  });
  return data;
}
export const getAssessmentPeriodString = (callback) => {
  getPaProgramData((error, result) => {
    const data = result.filter(item => {
      return item.Status === 2
    })[0];
    const fromDate = dateFormat(data.FromDate, DATE_FORMAT);
    const toDate = dateFormat(data.ToDate, DATE_FORMAT);
    const periodString = `${fromDate} - ${toDate}`;
    callback(error, periodString);
  });
}