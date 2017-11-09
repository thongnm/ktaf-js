export default {
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