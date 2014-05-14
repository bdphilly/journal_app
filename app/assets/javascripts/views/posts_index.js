JournalApp.Views.PostsIndexView = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function (options) {
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change:title", this.render);
    this.listenTo(this.collection, "change:body", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function () {
    var renderedTemplate = this.template({posts: this.collection });
    this.$el.html(renderedTemplate);

    return this;
  },

  events: _.extend({
    'click button.button-delete': 'deletePost'
  }, Backbone.View.prototype.events),

  deletePost: function (event) {
    var $target = $(event.target);
    var post = this.collection.get($target.data('id'));
    var that = this;
    post.destroy({
      success: function () {
        //
      }
    });
  },
})