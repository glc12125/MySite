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
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            console.log('home template:' + JSON.stringify(this.template));
            this.$el.html(this.template(this.model.toJSON()[0]));

            return this;
        }

    });

    return HomeItemsView;
});
