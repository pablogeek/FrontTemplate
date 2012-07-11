/**
 * General path configuration
 * @author Alvaro Nistal <alvaro.nistal@gmail.com>
 */
require.config({
	paths: {
		'templates': 'templates',
		'backbone' : 'lib/backbone',
		'jquery' : 'lib/jquery',
		'underscore': 'lib/underscore',
        'text': 'lib/text'
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

/**
 * Initializes router and general view. It loads general html structure and top menu.
 * BootstrapRouter, it loads a client dispatcher with not page reload.
 * BootrstapView, it loads general html structure, and general top menu
 * @author Alvaro Nistal <alvaro.nistal@gmail.com>
 */
require(['bootstrap/BootstrapView',
	'bootstrap/BootstrapRouter'], function(bootstrapView, bootstrapRouter) {
	bootstrapRouter.start();
	bootstrapView.start();
});

