import elements from './login/elements';
import commands from './login/commands';

export default {
  commands: [commands],
  elements,
  url: function() { 
		return this.api.launchUrl; 
	},
}
