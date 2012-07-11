/**
 * Bootstrap view. Loads all general components the fist time that the user enter in the page.
 * @author Alvaro Nistal <alvaro.nistal@gmail.com>
 */
define(['jquery', 
	'underscore', 
	'backbone',
	'view/menu/menu'], function($, _, backbone, menu) {
	var BootstrapView = function(){
	};

	BootstrapView.prototype.start = function() {
		menu.render();	
	};

	return new BootstrapView();
});
