define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/resumeitemtemplate.html'
], function($, _, Backbone, ResumeItemTemplate) {
    'use strict';

    var ResumeItemsView = Backbone.View.extend({

        tagName: 'div',

        template: _.template(ResumeItemTemplate),

        className: 'container',

        events: {},

        initialize: function(items) {
            
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            console.log('resume template:' + JSON.stringify(this.template));
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    return ResumeItemsView;
});
