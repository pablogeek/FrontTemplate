define(['jquery', 
	'backbone',
	'underscore',
	'router/router',
	'utils/diet'], function($, Backbone, _, router, diet) {

	var init = function () {
		router.init();
		console.log(diet.harrisBenedictEquation(76,182,30,'man'));
	}

	return {
		init: init
	};
});
