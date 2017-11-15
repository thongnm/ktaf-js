import {LOCATED} from '../../common/constants';

export default {
  selector: '%s',
  elements: {
    columns: {
      selector: 'table/thead/tr/th',
    },
    rows: {
      selector: 'table/tbody/tr',
    },
  },
  commands: [
    {
      getColumns: function(callback) {
        let columnElements = [];
        const columns = [];
        const selector = `${this.selector}/${this.elements.columns.selector}`;
        this.api.elements(LOCATED.xpath,
          selector,
          (result) => {
            columnElements = result.value;
        }).perform((done) => {
          if (columnElements.length === 0) done();
          columnElements.forEach( (element) => {
              this.api.elementIdText(element.ELEMENT, (text) => {
                columns.push(text.value);
                if (columns.length === columnElements.length) {
                  done();
                }
              });
            });
        }).perform(() => {
          callback(columns);
        });
      },
    },
  ],
};
