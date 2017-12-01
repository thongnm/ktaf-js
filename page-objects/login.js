import elements from './login/elements';
import baseCommands from './base/commands';
import commands from './login/commands';

export default {
  commands: [baseCommands, commands],
  elements,
  url: function() {
    return this.api.launchUrl;
  },
};
