JournalApp.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow",
  },

  postsIndex: function () {
    // debugger
    var indexView = new JournalApp.Views.PostsIndexView({
      collection: JournalApp.Collections.posts
    });

    $('#content').html(indexView.render().$el)
  },

  postShow: function (id) {
    var post = JournalApp.Collections.Posts.get(id);

    var showView = new JournalApp.Views.PostShow({
      model: post
    });

    $('#content').html(showView.render().$el)
  },



});