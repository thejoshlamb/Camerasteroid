Posts = new Meteor.Collection('posts');

Meteor.methods({
	post: function(postAttributes){

		var post = _.extend(_.pick(postAttributes,'message','submitted','photo','room'),{
			saved: (this.isSimulation ? "pending" : ""),
			submitted: new Date()
		});

		if(Posts.find({room: post.room}).count() > 10){
			var oldest = Posts.findOne({room: post.room},{
				sort:{ submitted:1 },
			});
			Posts.remove(oldest);
		}

		var postId = Posts.insert(post);

		return postId;
	}
});
