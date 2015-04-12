define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ResumeItem = Backbone.Model.extend({

        defaults: {
            resumeSectionName: 'Unknown',
            sectionItems: 'None'
        },

		parse: function( response ) {
	    	response.id = response._id;
	    	return response;
		}
    });

    return ResumeItem;
});