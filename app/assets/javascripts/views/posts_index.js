JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  render: function () {
    var renderedTemplate = this.template({posts: this.collection });
    this.$el.html(renderedTemplate);

    return this;
  }
})