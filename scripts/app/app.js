define(['jquery', 
	'backbone',
	'underscore',
	'router/router'], function($, Backbone, _, router) {

	var init = function () {
		router.init();
	}

	return {
		init: init
	};
});
