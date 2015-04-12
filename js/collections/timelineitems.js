/*global define */
define([
	'underscore',
	'backbone',
	'models/timelineitem'
], function (_, Backbone, TimeLineItem) {
	'use strict';

	var TimeLineItems = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: TimeLineItem,

		url: '/api/timelineitems'
	});

	return new TimeLineItems();
});