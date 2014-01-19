Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();
		var post = {
			message: $(e.target).find('[name=message]').val()
		};
		post._id = Posts.insert(post);
		Router.go('/');
	}
});