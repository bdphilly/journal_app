JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  render: function () {
    var renderedTemplate = this.template({
      title: this.model.get('title'),
      body: this.model.get('body'),
      errors: ''
    });
    this.$el.html(renderedTemplate);
    return this;
  },

  events: _.extend({ 'submit form' : 'updatePost' },
    Backbone.View.prototype.events),

  updatePost: function (event) {
    event.preventDefault();

    var $target = $(event.currentTarget)
    var postParams = $target.serializeJSON()["post"];
    this.model.set(postParams)
    var that = this;
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("posts/" + that.model.get('id'),
          { trigger: true });
      },
      error: function (model, response) {
        var renderedTemplate = that.template({
          title: postParams['title'],
          body: postParams['body'],
          errors: response.responseText,
        });
        that.$el.html(renderedTemplate)
      }
    })
  }

})