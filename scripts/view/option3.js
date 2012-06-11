define(['jquery', 
	'underscore', 
	'backbone',
	'text!templates/option-3.html'], function($, _, Backbone, template) {
	
	var option3 = Backbone.View.extend({
		el: $('#general-container'),

		render: function() {

			var data = {};	

			var templateA = _.template(template, data);

			$(this.el).html(templateA);
		}
	});

	return new option3;
});
