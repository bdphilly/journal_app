JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],

  render: function () {
    var renderedTemplate = this.template({
      post: this.model
      // title: this.model.get('title'),
//       body: this.model.get('body'),
      // errors: ''
    });
    this.$el.html(renderedTemplate);

    return this;
  },

  events: { 'click input[type="submit"]' : 'updatePost' },

  updatePost: function (event) {
    event.preventDefault();

    var $target = $(event.target.form)
    var postParams = $target.serializeJSON()["post"];

    var that = this;

    function success () {
      debugger
       Backbone.history.navigate("", { trigger: true });
     }

    this.model.set(postParams);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: success
      });
    } else {
      debugger
      this.model.save({},{
        success: function(){
          alert("test")
        },
        error: function(object, response){
          // debugger
          alert("I am fucking up")
        }
        // error: function (model, response) {
  //         var renderedTemplate = that.template({
  //           title: postParams['title'],
  //           body: postParams['body'],
  //
  //           // errors: response.responseText,
  //         });
  //         alert('some errors man!')
  //         that.$el.html(renderedTemplate)
        // }
      });
    }
  },
});