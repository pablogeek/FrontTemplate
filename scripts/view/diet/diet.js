define(['jquery', 
	'underscore', 
	'backbone',
    //'model/diet',
	'text!templates/diet/diet.html'], function($, _, Backbone, template) {	

		var DietView = Backbone.View.extend({
			el: $('#section-container'),
	
			render: function() {
         	
				var data = {};	
	
				var templateA = _.template(template, data);
	
				$(this.el).html(templateA);
			}
		});

		return new DietView();
	}
);
