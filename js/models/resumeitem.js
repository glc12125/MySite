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
            var i;
            for (i = 0; i < response.sectionItems.length; i++) {
                response.sectionItems[i].id = response.sectionItems[i]._id;
            }
	    	return response;
		}
    });

    return ResumeItem;
});