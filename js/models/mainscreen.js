define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var MainScreen = Backbone.Model.extend({

		defaults: {
			screenName: 'blog'
		}
		
	});

	return new MainScreen();
});