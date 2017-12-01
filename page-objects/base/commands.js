
export default {
  goto: function() {
    return this.navigate();
  },
  isAt: function(pageTitle) {
    return this.assert.title(pageTitle);
  },
};
