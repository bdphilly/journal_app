JournalApp.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit"
  },

  postsIndex: function () {
    // debugger
    var indexView = new JournalApp.Views.PostsIndexView({
      collection: JournalApp.Collections.posts
    });

    $('#content').html(indexView.render().$el);
  },

  postShow: function (id) {
    var post = JournalApp.Collections.posts.get(id);
    var showView = new JournalApp.Views.PostShow({
      model: post
    });

    $('#content').html(showView.render().$el);
  },

  postEdit: function (id) {
    var post = JournalApp.Collections.posts.get(id);
    var editView = new JournalApp.Views.PostForm({
      model: post
    });

    $('#content').html(editView.render().$el);
  }



});