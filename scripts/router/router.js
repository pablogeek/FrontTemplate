define(['jquery', 
	'underscore', 
	'backbone',
	'view/option1',
	'view/option2',
	'view/option3',
	'view/option4'], function($, _, backbone, option1, option2, option3, option4) {
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'option1',
			'option2': 'option2',
			'option3': 'option3',
			'option4': 'option4'
		},

		option1: function() {
			option1.render();
		},

		option2: function() {
			console.log('entra ..');
			option2.render();
		},

		option3: function() {
			option3.render();
		},

		option4: function() {
			option4.render();
		}
	});

	var init = function () {
		var appRouter = new AppRouter;
		Backbone.history.start();
	};

	return {
		init: init
	};
});
