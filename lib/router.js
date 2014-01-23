//subscriptions are managed here
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){
		return [Meteor.subscribe('posts',{room: window.location.pathname.substring(1,10)})];
	}
});

Router.map(function() {
	this.route('FAQ',{
		path: '/FAQ'
	});
	
	this.route('postsList', {
		path: '/:_room',
		load: function(){
			Meteor.subscribe('posts',{room: window.location.pathname.substring(1,10)});
		}
	});
	
	this.route('postsList',{
		path: '/'
	});

	// this.route('postPage', { 
	// 	path: '/posts/:_id', 
	// 	waitOn: function() {
	// 	return Meteor.subscribe('comments', this.params._id); 
	// 	}
	// }
});

