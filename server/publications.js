Meteor.publish('posts', function(){
	return Posts.find();
});

Meteor.publish('rooms', function(){
	return Rooms.find();
});