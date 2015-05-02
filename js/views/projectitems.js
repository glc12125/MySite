define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/projectitemtemplate.html'
], function($, _, Backbone, ProjectItemTemplate) {
    'use strict';

    var ProjectItemsView = Backbone.View.extend({

        tagName: 'div',

        template: _.template(ProjectItemTemplate),

        className: 'container',

        events: {},

        initialize: function(items) {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            console.log('project template:' + JSON.stringify(this.template));
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    return ProjectItemsView;
});
