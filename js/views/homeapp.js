define([
    'jquery',
    'underscore',
    'backbone',
    'collections/homeitems',
    'views/homeitems',
    'common'
], function($, _, Backbone, HomeItems, HomeItemsView, Common) {
    'use strict';

    var HomeAppView = Backbone.View.extend({
        el: '#homeapp',

        events: {},

        initialize: function () {
            this.$itemlist = this.$('#homecontent');
            this.listenTo(HomeItems, 'reset', this.addHomeItems);
            HomeItems.fetch({reset: true});
        },

        render: function () {
            this.$itemlist.show();
        },

        addHomeItems: function () {
            this.$itemlist.empty();
            HomeItems.each(this.addHomeItem, this);
        },

        addHomeItem: function (homeItem) {
            var view = new HomeItemsView({ model: homeItem });
            this.$itemlist.append(view.render().el);
        }

    });

    return HomeAppView;
});
