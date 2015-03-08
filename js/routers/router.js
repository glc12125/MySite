/*global define*/
define([
	'jquery',
	'backbone',
	'models/mainscreen',
	'common'
], function ($, Backbone, MainScreen, Common) {
	'use strict';

	var ScreenRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			Common.MainScreenFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of the Todo view items
			MainScreen.trigger('filter');
		}
	});

	return ScreenRouter;
});
