Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return Meteor.subscribe('posts','rooms');
	}
});

Router.map(function() {
	this.route('FAQ',{
		path: '/FAQ'
	});
	
	this.route('postsList', {
		path: '/:_room'
	});
	
	this.route('postsList',{
		path: '/'
	});


	//The special :_id syntax tells the router two things: 
	//first, to match any route of the form /posts/xyz/, 
	//where “xyz” can be anything at all. 
	//Second, to put whatever it finds in this “xyz” spot 
	//inside an _id property in the router's params array.
});

