Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();
		var post = {
			message: $(e.target).find('[name=message]').val(),
			submitted: new Date().getTime()
		};
		
		Meteor.call('post', post , function(error,id){
			if (error)
				return alert(error.reason);

			Router.go('/');
		});
	}
});