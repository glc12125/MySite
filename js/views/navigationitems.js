define([
	'jquery',
	'underscore',
	'backbone',
	'collections/navigationitems',
	'views/navigationitem'
], function ($, _, Backbone, NavigationItems, NavigationItemView ) {
	'use strict';

	var NavigationItemsView = Backbone.View.extend({

		el: '#navigationitems',

		className: 'navigationitems',

		events: {},

		initialize: function ( items ) {
			NavigationItems.fetch({reset: true});

			this.listenTo( NavigationItems, 'reset', this.render );
		},

		render: function(){
			NavigationItems.each(function( item ){
				this.renderNavigationItem( item );
			}, this);
		},

		renderNavigationItem: function( item ){
			var navigationItemView = new NavigationItemView({
				model: item
			});
			this.$el.append( navigationItemView.render().el );
		}

	});

	return NavigationItemsView;
});