if (Posts.find().count() === 0) {
	Posts.insert({
		message: "Knock Knock",
		submitted: new Date(),
		photo:"http://placekitten.com/320/240"
	});
	Posts.insert({
		message: "Who's there?",
		submitted: new Date(),
		photo:"http://placekitten.com/320/240"

	});
	Posts.insert({
		message: "Doctor.",
		submitted: new Date(),
		photo:"http://placekitten.com/320/240"
	});
}