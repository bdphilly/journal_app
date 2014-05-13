window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    JournalApp.Collections.posts = new JournalApp.Collections.Posts();
    JournalApp.Collections.posts.fetch({success: function () {
      new JournalApp.Routers.PostRouter();
      Backbone.history.start()
    }});
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
