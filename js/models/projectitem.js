define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProjectItem = Backbone.Model.extend({

        defaults: {
            projectSectionName: 'Unknown',
            sectionItems: 'None'
        },

		parse: function( response ) {
	    	response.id = response._id;
	    	return response;
		}
    });

    return ProjectItem;
});