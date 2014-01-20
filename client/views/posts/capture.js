if (Meteor.isClient) {
	Template.postSubmit.rendered = function(){
		(function() {

			var streaming = false,
			video        = document.querySelector('#video'),
			canvas       = document.querySelector('#canvas'),
			image        = document.querySelector('#image'),
			startbutton  = document.querySelector('#capture'),
			width = 320,
			height = 0;

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
					height = video.videoHeight / (video.videoWidth/width);
					video.setAttribute('width', width);
					video.setAttribute('height', height);
					canvas.setAttribute('width', width);
					canvas.setAttribute('height', height);
					streaming = true;
				}
			}, false);
		})();
	};
}