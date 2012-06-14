require.config({
	paths: {
		'templates': '../templates',
		'backbone' : 'lib/backbone',
		'jquery' : 'lib/jquery',
		'underscore': 'lib/underscore'
	},
	shim: {

		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		underscore: {
			exports: '_'
		}
	}
});

require(['bootstrap/BootstrapView',
			'bootstrap/BootstrapRouter'], function(bootstrapView, bootstrapRouter) {
	
	bootstrapRouter.start();
	bootstrapView.start();
});

