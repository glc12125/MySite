define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/socialitemtemplate.html'
], function($, _, Backbone, SocialItemTemplate) {
    'use strict';

    var SocialItemsView = Backbone.View.extend({

        tagName: 'div',

        template: _.template(SocialItemTemplate),

        className: 'col-md-4 griditem',

        events: {},

        initialize: function(items) {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            console.log('social template:' + JSON.stringify(this.template));
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    return SocialItemsView;
});
