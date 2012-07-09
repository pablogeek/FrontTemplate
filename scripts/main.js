require.config({
	paths: {
        'async': 'lib/async',
        'goog': 'lib/goog',
        'propertyParser': 'lib/propertyParser',
		'templates': 'templates',
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

