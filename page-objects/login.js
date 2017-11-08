const loginElements = {
  username: {
    selector: '#username'
  },
  password: {
    selector: '#password'
  },
  submit: {
    selector: '#btnSubmit'
  },
  error: {
    selector: 'p#pageMessage'
  }
};
const loginCommands = {
  fillInForm: function(info) {
		return this.setValue('@username', info.username)
			.setValue('@password', info.password);
  },
  submit: function() {
    return this.click('@submit');
  },
  validateError: function (errorMessage) {
		return this.verify.visible('@error')
			.verify.containsText('@error', errorMessage);
  },
};
export default {
  commands: [loginCommands],
  elements:loginElements,
  url: function() { 
		return this.api.launchUrl; 
	},
}
