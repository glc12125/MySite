/*global define */
define([
	'underscore',
	'backbone',
	'models/projectitem'
], function (_, Backbone, ProjectItem) {
	'use strict';

	var ProjectItems = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: ProjectItem,

		url: '/api/projectitems'
	});

	return new ProjectItems();
});