/**
 * Diet view. Renders user list diets
 * @author Alvaro Nistal alvaro.nistal@gmail.com
 */
define(['jquery', 
	'underscore', 
	'backbone',
    'model/Diet',
	'text!templates/diet/diet.html'], function($, _, Backbone, diet, template) {	
		var DietView = Backbone.View.extend({
			el: $('#section-container'),
	
			render: function() {
				var data = {};	
				var templateA = _.template(template, data);
				$(this.el).html(templateA);

                var diet = new Diet();

                // This must go in the model
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');
                data.addRows([
                    ['Proteinas', 3],
                    ['Hidratos de carbono', 1],
                    ['Grasas', 2]]);

                var options = {'width':340,
                    'height':150};
               
                var chart = new google.visualization.PieChart(document.getElementById('visualization'));
                chart.draw(data, options);

			}
		});
		return new DietView();
	}
);
