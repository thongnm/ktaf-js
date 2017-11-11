export default {
  selector: '%s',
  elements: {
    columns: {
      selector: 'table > thead > tr > th',
    },
    rows: {
      selector: 'table > tbody > tr',
    },
  },
  commands: [
    {
      getColumns: function(callback) {
        this.getText('@columns', (result) => {
          callback(result.value);
        });
      },
    },
  ],
};
