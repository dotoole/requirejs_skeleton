
require.config({
	baseUrl: "./",
	paths: {
	}
});

require(["some/module", "my/module", "a.js", "b.js"],
	function(someModule,    myModule) {

	}
);