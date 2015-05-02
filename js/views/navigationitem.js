define([
	'jquery',
	'underscore',
	'backbone',
	'models/navigationitem',
	'text!templates/navigationitemtemplate.html'
], function ($, _, Backbone, NavigationItem, NavigationItemTemplate) {
	'use strict';

	var NavigationItemView = Backbone.View.extend({

		tagName: 'li',

		template: _.template(NavigationItemTemplate),

		events: {},

		render: function () {

			console.log( 'model:' + JSON.stringify(this.model) );
			console.log( 'navigationitem template:' + this.template );

			this.$el.html( this.template( this.model.toJSON() ));

			return this;
		}

	});

	return NavigationItemView;
});