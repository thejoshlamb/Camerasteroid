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

		document.querySelector('#chats-ul').innerHTML = '';

		Router.go('/'+newrandom);
	}
});

Template.header.rendered = function(){
	var URL = location.pathname.substring(1,10);
	//10 private rooms are allowed besides the mainpage
	if(URL !== ""){
		//count the number of private rooms
		if(Rooms.find().count() > 10){
			//if there are 10 private rooms already, get the oldest room and check its posts
			Rooms.find().fetch()
			Router.go('/');
		}
		
		if (Rooms.find({url:URL}) == []){
			var room = {
				url: URL,
				created: new Date()
			};

			Meteor.call('makeNewRoom',room, function(error,id){
				if (error)
					return alert(error.reason);
			});
		}
	}
}