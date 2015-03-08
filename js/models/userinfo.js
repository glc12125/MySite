define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var UserInfo = Backbone.Model.extend({

		defaults: {
			profileImage: '',
			firstName: '',
			surName: '',
			email: '',
			mobile: ''
		}

	});

	return UserInfo;
});