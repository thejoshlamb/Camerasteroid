// Meteor.isServer can be used to limit where code runs, but it does not prevent 
// code from being sent to the client. Any sensitive code that you don't want served 
// to the client, such as code containing passwords or authentication mechanisms,
// should be kept in the server directory.

Meteor.publish('posts', function(currentroom){
	return Posts.find({room: currentroom});
});