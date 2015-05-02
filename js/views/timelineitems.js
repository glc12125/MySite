define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/timelineitemtemplate.html',
    'common'
], function($, _, Backbone, TimeLineItemTemplate, Common) {
    'use strict';

    var TimeLineItemsView = Backbone.View.extend({

        tagName: 'li',

        template: _.template(TimeLineItemTemplate),

        className: 'list-group-item',

        events: {},

        initialize: function(items) {
            
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'visible', this.toggleVisible);
        },

        render: function() {
            console.log('timeline template:' + JSON.stringify(this.template));
            this.$el.html(this.template(this.model.toJSON()));
            this.toggleVisible();

            return this;
        },

        toggleVisible: function() {
            this.$el.toggleClass('hidden', this.isHidden());
        },

        isHidden: function() {
            var currentCategory = this.model.get('timeLineCategory');
            var currentTile = this.model.get('timeLineTitle');
            console.log('timeline: ' + currentTile + ', category:' + currentCategory);
            console.log('current TimeLineFilter: ' + Common.TimeLineFilter);
            return ( // hidden cases only
                (Common.TimeLineFilter !== '') &&
                (Common.TimeLineFilter !== currentCategory)
            );
        },
    });

    return TimeLineItemsView;
});
