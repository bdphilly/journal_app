JournalApp.Routers.PostRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit",
  },

  postsIndex: function () {
    var that = this;

    JournalApp.Collections.posts.fetch({
      success: function () {
        var indexView = new JournalApp.Views.PostsIndexView({
          collection: JournalApp.Collections.posts
        });

        that._swapView(indexView);
      }
    })
  },

  postNew: function () {
    var newPost = new JournalApp.Models.Post();
    var newView = new JournalApp.Views.PostForm({
      collection: JournalApp.Collections.posts,
      model: newPost
    });

    this._swapView(newView);
  },

  postShow: function (id) {
    var that = this;

    that._getPost(id, function (post) {
      var showView = new JournalApp.Views.PostShow({
        model: post
      });

      that._swapView(showView);
    });
  },

  postEdit: function (id) {
    var that = this;

    that._getPost(id, function (post) {
      var editView = new JournalApp.Views.PostForm({
        model: post
      });

      that._swapView(editView);
    });
  },

  _getPost: function (id, callback) {
    var post = JournalApp.Collections.posts.get(id);
    if (!post) {
      post = new JournalApp.Models.Post({ id: id });
      post.collection = JournalApp.Collections.posts;
      post.fetch({
        success: function () {
          JournalApp.Collections.posts.add(post);
          callback(post);
        }
      });
    } else {
      callback(post);
    }
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    // this.$rootEl === '#content'
    this.$rootEl.html(view.render().$el);
  },
});