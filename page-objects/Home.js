import elements from './home/elements';
import commands from './home/commands';

export default {
  commands: [commands],
  elements,
  url: function() { 
		return `${ this.api.launchUrl }/home`; 
	},
}
