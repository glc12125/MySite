define([
	'jquery',
	'underscore',
	'backbone',
	'collections/myinfo',
	'models/mainscreen',
	'views/myinfo',
	'views/navigationitems',
	'views/mainscreen',
	'common'
], function ($, _, Backbone, MyInfo, MainScreen, MyInfoView, NavigationItemsView, MainScreenView, Common ){
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#siteapp',

		//template: _.template(userInfoTemplate);

		events: {},

		initialize: function () {
			this.$userInfodata = this.$('#userinfo');

			this.listenTo(MyInfo, 'reset', this.addUserInfo);
			//this.listenTo(MainScreen, 'filter', this.switchScreen);

			MyInfo.fetch({reset: true});

			new NavigationItemsView();
			//new MainScreenView({model: MainScreen});
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