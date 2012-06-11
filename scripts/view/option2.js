define(['jquery', 
	'underscore', 
	'backbone',
	'text!templates/option-2.html'], function($, _, Backbone, template) {
	
	var option2 = Backbone.View.extend({
		el: $('#general-container'),

		render: function() {

			var data = {};	

			var templateA = _.template(template, data);

			$(this.el).html(templateA);
		}
	});

	return new option2;
});
