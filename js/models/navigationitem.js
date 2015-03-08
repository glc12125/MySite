define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var NavigationItem = Backbone.Model.extend({

        defaults: {
            navigationItemName: 'Unknown',
            navigationSubItems: 'None'
        },

		parse: function( response ) {
	    	response.id = response._id;
	    	return response;
		}
    });

    return NavigationItem;
});