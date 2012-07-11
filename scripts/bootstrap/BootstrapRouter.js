/**
 * General router dispatcher with not reload page.
 * @author Alvaro Nistal <alvaro.nistal@gmail.com>
 */
define(['jquery', 
	'underscore', 
	'backbone',
	'view/diet/diet',
	'view/calendar/calendar',
	'view/evolution/evolution',
	'view/profile/profile',
    'view/profile/preferences'], function($, _, backbone, diet, calendar, evolution, profile, preferences) {
    var BootstrapRouter = Backbone.Router.extend({
    	routes: {
            '': 'intro',
            'timeline': 'timeline',
    		'diet': 'diet',
    		'calendar': 'calendar',
    		'evolution': 'evolution',
    		'profile': 'profile',
    		'preferences': 'preferences'
    	},

        timeline: function() {
    	    //timeline.render();
    	},

    	diet: function() {
    	    diet.render();
    	},

    	calendar: function() {
    		calendar.render();
    	},

    	evolution: function() {
    		evolution.render();
    	},

    	profile: function() {
    		profile.render();
    	},
        
    	preferences: function() {
    		preferences.render();
        }
    });

    BootstrapRouter.prototype.start = function () {
    	var bootstrapRouter = new BootstrapRouter();
    	Backbone.history.start();
    };

    return new BootstrapRouter();
});
