Template.newRoom.events({
	'click #newroom': function(e){
		e.preventDefault();
		var random = Math.floor(Math.random()*10);
		Router.go('/'+random);
	}
});