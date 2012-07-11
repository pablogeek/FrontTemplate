/**
 * Menu view. Renders top general menu in the page.
 * @author Alvaro Nistal alvaro.nistal@gmail.com
 */
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
			},
            
            events: {
                "click li": "changeMenuItemToActive"
            },
            
            changeMenuItemToActive: function(event) {
                $(".nav li",this.el).removeClass("active");
                var currentTarget = $(event.currentTarget).addClass("active");
            }
		});

		return new MenuView();
	}
);
