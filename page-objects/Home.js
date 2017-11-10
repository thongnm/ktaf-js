import elements from './home/elements';
import commands from './home/commands';
import menu from './components/menu';

export default {
  commands: [commands],
  elements,
  sections: {
    menu,
  },
  url: function() { 
		return `${ this.api.launchUrl }/home`; 
	},
}
