Template.postItem.helpers({
	ownPost: function(){
		return this.userID == Meteor.userID();
	}
});

Template.postItem.events({
	'click .delete': function(e){
		e.preventDefault();
		if (confirm("Delete?")){
			var currentPostId = this._id;
			Posts.remove(currentPostId);
		}
	}
});