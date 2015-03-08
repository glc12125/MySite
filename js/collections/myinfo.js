/*global define */
define([
	'underscore',
	'backbone',
	'models/userinfo'
], function (_, Backbone, UserInfo) {
	'use strict';

	var MyInfoCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: UserInfo,

		url: '/api/userinfo'
	});

	return new MyInfoCollection();
});
