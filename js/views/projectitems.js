define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/projectitemtemplate.html'
], function($, _, Backbone, ProjectItemTemplate) {
    'use strict';

    var ProjectItemsView = Backbone.View.extend({

        tagName: 'li',

        template: _.template(ProjectItemTemplate),

        className: 'list-group-item list-item-override',

        events: {},

        initialize: function(items) {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            console.log('project template:' + this.template);
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    return ProjectItemsView;
});
