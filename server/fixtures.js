if (Posts.find().count() === 0) {
	Posts.insert({
		message: "Knock Knock",
		submitted: new Date(),
		saved: "",
		author: "admin"
	});
	Posts.insert({
		message: "Who's there?",
		submitted: new Date(),
		saved: "",
		author: "admin"
	});
	Posts.insert({
		message: "Doctor.",
		submitted: new Date(),
		saved: "",
		author: "admin"
	});
}