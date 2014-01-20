Posts = new Meteor.Collection('posts');

Posts.allow({
	remove: ownsDocument
});

Posts.deny({
	update: function(userId, post, fieldNames){
		// only allow editing of the following fields:
		return (_.without(fieldNames,'message').length>0);
	}
})

Meteor.methods({
	post: function(postAttributes){ // function adding new posts
		var user = Meteor.user();

		// ensure user is logged in
		if(!user)
			throw new Meteor.error(401,"You need to login to chat");

		// ensure that the post has a message
		if(!postAttributes.message)
			throw new Meteor.error(422,"You have to say something");

		var post = _.extend(_.pick(postAttributes,'message','submitted'),{
			saved: (this.isSimulation ? "pending" : ""),
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		if(! this.isSimulation ){
			var Future = Npm.require('fibers/future');
			var future = new Future();
			Meteor.setTimeout(function(){
				future.return();
			},5*1000);
			future.wait();
		}

		var postId = Posts.insert(post);

		return postId;
	}
});
