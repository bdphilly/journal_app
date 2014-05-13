JournalApp.Views.PostsIndexView = Backbone.View.extend({
  template: JST['posts/index'],
  render: function () {
    var renderedTemplate = this.template({posts: this.collection });
    this.$el.html(renderedTemplate);

    return this;
  },
  events: _.extend({
    'click button.button-delete': 'delete'
  }, Backbone.View.prototype.events),
  delete: function (event) {
    var $target = event.target;

  }
})