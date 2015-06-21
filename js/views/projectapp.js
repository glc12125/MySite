define([
	'jquery',
	'underscore',
	'backbone',
	'collections/projectitems',
	'views/projectitems',
	'common'
], function ($, _, Backbone, ProjectList, ProjectItemsView, Common ){
	'use strict';

	var ProjectAppView = Backbone.View.extend({
		el: '#projectapp',

		//template: _.template(userInfoTemplate);
		className: 'container',

		events: {},

		initialize: function () {

			this.$projectlist = this.$('#projectlist');
			this.listenTo(ProjectList, 'reset', this.addProjectItems);

			ProjectList.fetch({reset: true});

		},

		render: function () {
			this.$projectlist.show();
		},

		addProjectItems: function () {
			this.$projectlist.empty();
			ProjectList.each(this.addProjectItem, this);
			$('.collapse-card').paperCollapse();
		},

		addProjectItem: function ( projectItem ) {
			var view = new ProjectItemsView({ model: projectItem });
			this.$projectlist.append(view.render().el);
		},

	});

	return ProjectAppView;
});