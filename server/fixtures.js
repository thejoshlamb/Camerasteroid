if (Posts.find().count() === 0) {
	Posts.insert({
		room : "1",
		message: "1",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
	Posts.insert({
		room : "2",
		message: "2",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
	Posts.insert({
		room : "3",
		message: "3",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
	Posts.insert({
		room : "4",
		message: "4",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
	Posts.insert({
		room : 5,
		message: "5",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
	Posts.insert({
		room : 6,
		message: "6",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
	Posts.insert({
		room : 7,
		message: "7",
		submitted: new Date(),
		photo:"http://placekitten.com/160/120"
	});
}