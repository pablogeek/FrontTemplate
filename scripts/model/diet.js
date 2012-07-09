define(['jquery',
        'underscore',
        'backbone'
        'goog!visualization,1,packages:[corechart,geochart]', 
        'goog!search,1'], function($, _, Backbone) {
        
        Diet = Backbone.Model.extend({
            initialize: function(data) {
                var data = new google.visualization.DataTable();
                console.log(data);
            } 
        });
    }
);
