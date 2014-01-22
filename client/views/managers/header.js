// the header manages the creation of new Rooms

Template.header.events({
	'click #newroom': function(e){
		e.preventDefault();

		function makeId() {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for( var i=0; i < 10; i++ )
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			return text;
		}

		var newrandom = makeId();

		var room = {
			url: newrandom,
			created: new Date()
		};

		Meteor.call('makeNewRoom',room , function(error,id){
			if (error)
				return alert(error.reason);
		});

		document.querySelector('#chats-ul').innerHTML = '';

		Router.go('/'+room.url);
	}
});