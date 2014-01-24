Posts = new Meteor.Collection('posts');

Meteor.methods({
	post: function(postAttributes){

		var post = _.extend(_.pick(postAttributes,'message','submitted','photo','room'),{
			saved: (this.isSimulation ? "pending" : ""),
			submitted: new Date(),
		});

		if(Posts.find({room: post.room}).count() > 10){
			var oldest = Posts.findOne({room: post.room},{
				sort:{ submitted:1 },
			});
			Posts.remove(oldest);
		}

		var postId = Posts.insert(post);

		// var self = Posts.findOne({_id: postId});
		// Posts.remove(self);

		if (! this.isSimulation ) {
			if (post.room !== ""){
				Meteor.setTimeout(function() {
					Posts.remove(postId);
				}, 60 * 60 * 1000);
			}
		}
		return postId;
	}
});
