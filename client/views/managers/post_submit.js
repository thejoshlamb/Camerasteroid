//initialize camera on the client side
if (Meteor.isClient) {
	// once the postSubmit template is rendered (hidden),
	// ask the user for access to the webcam
	Template.postSubmit.rendered = function(){

		var streaming = false,	//	used to watch for camera activation
		video = document.querySelector('#video'),
		canvas = document.querySelector('#canvas'),
		ctx = canvas.getContext('2d'),
		width = 160,
		height = 120;

		canvas.width = width;
		canvas.height = height;

		ctx.fillStyle="#F6F4F0";
		ctx.font="100px Arial";
		ctx.fillText("?",50,100);

		navigator.getMedia = ( navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia);

		// create ObjectURL from stream and play
		navigator.getMedia(
			{
				video: true,
				audio: false
			},
			function(stream) {
				if (navigator.mozGetUserMedia) {
					video.mozSrcObject = stream;
				} else {
					var vendorURL = window.URL || window.webkitURL;
					video.src = vendorURL.createObjectURL(stream);
				}
				video.play();
			},
			function(err) {
				console.log("An error occured! " + err);
				document.querySelector(".error").style.visibility = "visible";
			}
		);

		//	once camera is active, arrange the chat window
		video.addEventListener('canplay', function(ev){
			if (!streaming) {
				document.querySelector('#canvas').style.display = "none";
				document.querySelector('#video').style.display = "inline";
				video.width = width;
				video.height = height;
				streaming = true;
			}
		}, false);
	};
}
	
//form submit handler to take pic & save text
Template.postSubmit.events({
	'submit form': function(e){
		e.preventDefault();
		var video = document.querySelector('#video');
		var snap = document.querySelector('#canvas').getContext('2d').drawImage(video, 0, 0, 160, 120);
		var post = {
			room: location.pathname.substring(1,10),
			message: $(e.target).find('[name=message]').val(),
			photo: canvas.toDataURL('image/png'),
			submitted: new Date()
		};

		document.querySelector('#chatform').reset();
		
		Meteor.call('post', post , function(error,id){
			if (error)
				return alert(error.reason);
		});
	}
});