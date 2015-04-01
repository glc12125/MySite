define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var SocialItem = Backbone.Model.extend({

        defaults: {
            socialName: 'Unknown',
            socialIcon: 'Unknown',
            socialLink: 'None'
        },

		parse: function( response ) {
	    	response.id = response._id;
	    	return response;
		}
    });

    return SocialItem;
});