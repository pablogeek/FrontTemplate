/**
 * Defines a model entity that describes a diet. One diet is composed with one or more ingredients
 * @author Alvaro Nistal <alvaro.nistal@gmail.com>
 */
define(['jquery',
        'underscore',
        'backbone'], function($, _, Backbone) {
        Diet = Backbone.Model.extend({
            initialize: function(data) {
                console.log('pasas');
            } 
        });
    }
);
