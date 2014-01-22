Template.postsList.helpers({
	posts: function(){
		var currentRoom = location.pathname.substring(1,10);
		return Posts.find({room: currentRoom}, {
			sort: {submitted:1}
		});
	}
});



 