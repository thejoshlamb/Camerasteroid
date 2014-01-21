if (Meteor.isClient) {
	Template.postSubmit.rendered = function(){
		var streaming = false,
		video        = document.querySelector('#video'),
		canvas       = document.querySelector('#canvas'),
		width = 160,
		height = 120;

		navigator.getMedia = ( navigator.getUserMedia ||
			navigator.webkitGetUserMedia ||
			navigator.mozGetUserMedia ||
			navigator.msGetUserMedia);

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
		}
		);

		video.addEventListener('canplay', function(ev){
			if (!streaming) {
				document.querySelector('#footer').style.visibility = "visible";
				video.setAttribute('width', width);
				video.setAttribute('height', height);
				canvas.setAttribute('width', width);
				canvas.setAttribute('height', height);
				streaming = true;
			}
		}, false);
	};
}