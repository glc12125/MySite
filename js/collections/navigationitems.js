/*global define */
define([
	'underscore',
	'backbone',
	'models/navigationitem'
], function (_, Backbone, NavigationItem) {
	'use strict';

	var NavigationItems = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: NavigationItem,

		url: '/api/navigationitems'
	});

	return new NavigationItems();
});
