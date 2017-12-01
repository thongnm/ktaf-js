import elements from './home/elements';
import commands from './home/commands';
import baseCommands from './base/commands';
import menu from './components/menu';
import datagrid from './components/datagrid';

export default {
  commands: [baseCommands, commands],
  elements,
  sections: {
    menu,
    datagrid,
  },
  url: function() {
    return `${ this.api.launchUrl }/home`;
  },
};
