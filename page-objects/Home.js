import elements from './home/elements';
import commands from './home/commands';
import menu from './components/menu';
import datagrid from './components/datagrid';

export default {
  commands: [commands],
  elements,
  sections: {
    menu,
    datagrid,
  },
  url: function() {
    return `${ this.api.launchUrl }/home`;
  },
};
