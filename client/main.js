if (Meteor.isServer) {
  Meteor.startup(function () {
    var posts = document.getElementById("posts");
		posts.scrollTop = posts.scrollHeight;
  });
}