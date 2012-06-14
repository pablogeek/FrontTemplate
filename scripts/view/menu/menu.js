define(['jquery', 
	'underscore', 
	'backbone',
	'text!templates/menu/menu.html'], function($, _, Backbone, template) {	

		var MenuView = Backbone.View.extend({
			el: $('#menu-container'),
	
			render: function() {
	
				var data = {};	
	
				var templateA = _.template(template, data);
	
				$(this.el).html(templateA);
			}
		});

		return new MenuView();
	}
);
