Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();
		var video = document.querySelector('#video');
		var snap = document.querySelector('#canvas').getContext('2d').drawImage(video, 0, 0, 160, 120);
		var post = {
			message: $(e.target).find('[name=message]').val(),
			photo: canvas.toDataURL('image/png'),
			submitted: new Date().getTime()
		};
		
		Meteor.call('post', post , function(error,id){
			if (error)
				return alert(error.reason);
		});
	}
});
	
