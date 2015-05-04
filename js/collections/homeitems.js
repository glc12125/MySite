/*global define */
define([
	'underscore',
	'backbone',
	'models/home'
], function (_, Backbone, Home) {
	'use strict';

	var HomeItemns = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: Home,

		url: '/api/home'
	});

	return new HomeItemns();
});