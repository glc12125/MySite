define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TimeLineItem = Backbone.Model.extend({

        defaults: {
            timeLineTitle: 'Unknown',
            timeLineCategory: 'Unknown',
            timeLineContent: 'None',
            timeLineDate: 'None'
        },

		parse: function( response ) {
	    	response.id = response._id;
	    	return response;
		}
    });

    return TimeLineItem;
});