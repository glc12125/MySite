/*global define */
define([
	'underscore',
	'backbone',
	'models/socialitem'
], function (_, Backbone, SocialItem) {
	'use strict';

	var SocialItems = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: SocialItem,

		url: '/api/socialitems'
	});

	return new SocialItems();
});