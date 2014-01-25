//subscriptions are managed here
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		var currentroom = window.location.pathname.substring(1,10);
		return Meteor.subscribe('posts',currentroom);
	}
});

Router.map(function() {
	this.route('FAQ',{
		path: '/FAQ'
	});
	
	this.route('postsList', {
		path: '/:_room',
		load: function(){
			var currentroom = window.location.pathname.substring(1,10);
			Meteor.subscribe('posts',currentroom);
		}
	});
	
	this.route('postsList',{
		path: '/',
		load: function(){
			Meteor.subscribe('posts',"");
		}
	});

	// this.route('postPage', { 
	// 	path: '/posts/:_id', 
	// 	waitOn: function() {
	// 	return Meteor.subscribe('comments', this.params._id); 
	// 	}
	// }
});

