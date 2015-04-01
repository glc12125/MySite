define([
	'jquery',
	'underscore',
	'backbone',
	'collections/myinfo',
	'views/myinfo',
	'views/navigationitems',
	'common'
], function ($, _, Backbone, MyInfo, MyInfoView, NavigationItemsView, Common ){
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#siteapp',

		//template: _.template(userInfoTemplate);

		events: {},

		initialize: function () {
			this.$userInfodata = this.$('#userinfo');

			this.listenTo(MyInfo, 'reset', this.addUserInfo);

			MyInfo.fetch({reset: true});

			new NavigationItemsView();
		},

		render: function () {
			this.$userInfodata.show();
		},

		addUserInfo: function () {
			var myInfoView = new MyInfoView({ model: MyInfo });
			this.$userInfodata.append(myInfoView.render().el);
		},

		switchScreen: function() {
			MainScreen.screenName = Common.MainScreenFilter;
			MainScreen.url = "/api/" || MainScreen.screenName;
			MainScreen.trigger('screenSwitched');
		}
	});

	return AppView;
});