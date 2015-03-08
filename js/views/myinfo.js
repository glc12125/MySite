define([
	'jquery',
	'underscore',
	'backbone',
	'models/userinfo',
	'text!templates/myinfotemplate.html'
], function ($, _, Backbone, UserInfo, myInfoTemplate) {
	'use strict';

	var MyInfoView = Backbone.View.extend({

		tagName: 'div',

		className: 'myinfo',

		template: _.template(myInfoTemplate),

		events: {},

		initialize: function ( myinfo ) {
			console.log( 'template:' + JSON.stringify(myInfoTemplate) );
		},

		render: function () {
			console.log( 'model:' + JSON.stringify(this.model) );
			console.log( 'template:' + this.template );
			this.$el.html(this.template(this.model.toJSON()[0]));

			return this;
		}

	});

	return MyInfoView;
});