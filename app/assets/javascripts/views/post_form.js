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
    var postParams = $target.serializeJSON();

    // function success () {
    //   Backbone.history.navigate("", { trigger:true })
    // }

    this.model.set(postParams)
    // var that = this;

    // this.model.save({}, {
    //   success: success
    // });

    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("",
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
    });
  },

})