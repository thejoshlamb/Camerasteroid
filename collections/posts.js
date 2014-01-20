Posts = new Meteor.Collection('posts');

Posts.allow({
});

Posts.deny({
});

Meteor.methods({
	post: function(postAttributes){
		var post = _.extend(_.pick(postAttributes,'message','submitted','photo'),{
			saved: (this.isSimulation ? "pending" : ""),
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

		if(Posts.find().count() > 5){
			var oldest = Posts.findOne({},{
				sort:{ submitted:1 },
			});
		}

		Posts.remove(oldest);

		var postId = Posts.insert(post);

		return postId;
	}
});
