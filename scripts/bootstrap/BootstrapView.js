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
