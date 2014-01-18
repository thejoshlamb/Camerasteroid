if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Fixture One",
		author: "Someone",
		url: "http://zombo.com"
	});
	Posts.insert({
		title: "Fixture Two",
		author: "A Guy",
		url: "http://tane.us"
	});
	Posts.insert({
		title: "Fixture Three",
		author: "Some Dude",
		url: "http://hell.com"
	});
}