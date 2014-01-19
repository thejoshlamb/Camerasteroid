if (Posts.find().count() === 0) {
	Posts.insert({
		message: "Knock Knock"
	});
	Posts.insert({
		message: "Who's there?",
	});
	Posts.insert({
		message: "Doctor."
	});
}