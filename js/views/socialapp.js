define([
	'jquery',
	'underscore',
	'backbone',
	'collections/socialitems',
	'views/socialitems',
	'common'
], function ($, _, Backbone, SocialList, SocialItemsView, Common ){
	'use strict';

	var SocialAppView = Backbone.View.extend({
		el: '#socialapp',

		//template: _.template(userInfoTemplate);
		className: 'container maingrid',

		events: {},

		initialize: function () {

			this.$sociallist = this.$('#sociallist');
			this.listenTo(SocialList, 'reset', this.addSocialItems);

			SocialList.fetch({reset: true});

		},

		render: function () {

		},

		addSocialItems: function () {
			this.$sociallist.empty();
			SocialList.each(this.addSocialItem, this);
		},

		addSocialItem: function ( socialItem ) {
			var view = new SocialItemsView({ model: socialItem });
			this.$sociallist.append(view.render().el);
		},

	});

	return SocialAppView;
});