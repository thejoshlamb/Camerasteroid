Template.postsList.helpers({
	posts: function(){
		return Posts.find({room: location.pathname.substring(1,2)}, {
			sort: {submitted:1}
		});
	}
});



 