JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  render: function() {
    var renderedTemplate = this.template({post: this.model});
    this.$el.html(renderedTemplate);
    return this;
  }

})