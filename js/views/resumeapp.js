define([
	'jquery',
	'underscore',
	'backbone',
	'collections/resumeitems',
	'views/resumeitems',
	'common'
], function ($, _, Backbone, ResumeList, ResumeItemsView, Common ){
	'use strict';

	var ResumeAppView = Backbone.View.extend({
		el: '#resumeapp',

		//template: _.template(userInfoTemplate);
		className: 'container',

		events: {},

		initialize: function () {

			this.$resumelist = this.$('#resumelist');
			this.listenTo(ResumeList, 'reset', this.addResumeItems);

			ResumeList.fetch({reset: true});

		},

		render: function () {
			this.$resumelist.show();
		},

		addResumeItems: function () {
			this.$resumelist.empty();
			ResumeList.each(this.addResumeItem, this);
			$('.collapse-card').paperCollapse();
		},

		addResumeItem: function ( resumeItem ) {
			var view = new ResumeItemsView({ model: resumeItem });
			this.$resumelist.append(view.render().el);
		},

	});

	return ResumeAppView;
});