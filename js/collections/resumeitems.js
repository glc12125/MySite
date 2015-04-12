/*global define */
define([
	'underscore',
	'backbone',
	'models/resumeitem'
], function (_, Backbone, ResumeItem) {
	'use strict';

	var ResumeItems = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: ResumeItem,

		url: '/api/resumeitems'
	});

	return new ResumeItems();
});