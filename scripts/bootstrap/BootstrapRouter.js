define(['jquery', 
	'underscore', 
	'backbone',
	'view/diet/diet',
	'view/calendar/calendar',
	'view/evolution/evolution',
	'view/profile/profile',
    'view/profile/preferences'], 
function($, _, backbone, diet, calendar, evolution, profile, preferences) {
    var BootstrapRouter = Backbone.Router.extend({
    	routes: {
            '': 'diet',
    		'diet': 'diet',
    		'calendar': 'calendar',
    		'evolution': 'evolution',
    		'profile': 'profile',
    		'preferences': 'preferences'
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
