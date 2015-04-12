/*global define*/
define([
	'jquery',
	'backbone',
	'collections/timelineitems',
	'common'
], function ($, Backbone, TimeLineItems, Common) {
	'use strict';

	var TimeLineRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			Common.TimeLineFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of the time line items
			TimeLineItems.trigger('filter');
		}
	});

	return TimeLineRouter;
});
