define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/mainscreentemplate.html'
], function ($, _, Backbone, MainScreenTemplate) {
	'use strict';

	var MainScreenView = Backbone.View.extend({

		el: '#mainscreen',

		template: _.template(MainScreenTemplate),

		events: {},

		initialize: function ( ) {
			console.log( 'main screen template:' + JSON.stringify(MainScreenTemplate) );

			this.listenTo( this.model, 'screenSwitched', this.switchScreen);
			this.listenTo( this.model, 'reset', this.render );
		},

		render: function () {
			// User this.model later
			console.log( 'after fetch:' + JSON.stringify(this.model) );
			this.$el.append(this.template({test:"test"}));
		},

		switchScreen: function() {

			if (this.model.screenName === "blog"){

			}
			else {

			}
			//this.model.fetch({reset:true});
			console.log("screen name: " + this.model.screenName);
			this.$el.html('');
			this.$el.html(this.template({test:"test"}));

		}

	});

	return MainScreenView;
});