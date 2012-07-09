define(['jquery', 
	'underscore', 
	'backbone',
	'text!templates/profile/profile.html'], function($, _, Backbone, template) {
	
	var ProfileView = Backbone.View.extend({
		el: $('#section-container'),

		render: function() {

			var data = {};	

			var templateHtml = _.template(template, data);

			$(this.el).html(templateHtml);
		}
	});

	return new ProfileView;
});
