Template.postItem.helpers({
	ownPost: function(){
		return this.userID == Meteor.userID();
	}
});

Template.postItem.events({
	'click .delete': function(e){
		e.PreventDefault();
		var currentPostId = this._id;
	}
});