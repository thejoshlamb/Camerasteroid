Rooms = new Meteor.Collection('rooms');

Meteor.methods({
	makeNewRoom: function(roomAttributes){
		Rooms.insert(roomAttributes);
	}
});