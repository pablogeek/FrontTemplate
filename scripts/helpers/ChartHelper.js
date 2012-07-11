/**
 * ChartHelper, general helper used to draw charts in the DOM
 * @author Alvaro Nistal alvaro.nistal@gmail.com
 */
define([], function() {	
    var DietView = {

        render: function() {

            // This must go in the model
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                ['Proteinas', 3],
                ['Hidratos de carbono', 1],
                ['Grasas', 1],
                ['Vitaminas', 1],
                ['Agua', 2]]);

            var options = {'width':340,
                'height':150};

            var chart = new google.visualization.PieChart(document.getElementById('visualization'));
            chart.draw(data, options);

        },

        
    };
    return new DietView();
}
);
