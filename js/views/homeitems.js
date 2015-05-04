define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/hometemplate.html'
], function($, _, Backbone, HomeTemplate) {
    'use strict';

    var HomeItemsView = Backbone.View.extend({

        tagName: 'div',

        template: _.template(HomeTemplate),

        className: 'container',

        events: {},

        initialize: function(items) {
            console.log('home template:' + JSON.stringify(HomeTemplate));
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    return HomeItemsView;
});
