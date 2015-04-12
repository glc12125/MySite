define([
    'jquery',
    'underscore',
    'backbone',
    'collections/timelineitems',
    'views/timelineitems',
    'text!templates/timelinefiltertemplate.html',
    'common'
], function($, _, Backbone, TimeLineItems, TimeLineItemsView, TimeLineFilterTemplate, Common) {
    'use strict';

    var TimeLineAppView = Backbone.View.extend({
        el: '#timelineapp',

        template: _.template(TimeLineFilterTemplate),

        className: 'container',

        events: {},

        initialize: function() {
            console.log('timelineapp template:' + JSON.stringify(this.template));

            this.$timelinelist = this.$('#timelineitems');
            this.$timelinehead = this.$('#timelinehead');
            this.listenTo(TimeLineItems, 'reset', this.addItemLineItems);
            // triggered by timelinerouter, hidding or unhidding timeline items
            this.listenTo(TimeLineItems, 'filter', this.filterAll);
            this.listenTo(TimeLineItems, 'all', this.render);

            TimeLineItems.fetch({
                reset: true
            });

        },

        render: function() {
            this.$timelinehead.show();

            this.$timelinehead.html(this.template({}));

            console.log('Common.TimeLineFilter in timelineapp.js: ' + Common.TimeLineFilter);
            this.$('#timelinefilters li a')
                .removeClass('selected')
                .filter('[href="#/' + (Common.TimeLineFilter || '') + '"]')
                .addClass('selected');
                
            if (TimeLineItems.length) {
                this.$timelinelist.show();
            } else {
                this.$timelinelist.hide();
            }
        },

        addItemLineItems: function() {
            this.$timelinelist.empty();
            TimeLineItems.each(this.addTimeLineItem, this);
        },

        addTimeLineItem: function(timeLineItem) {
            var view = new TimeLineItemsView({
                model: timeLineItem
            });
            this.$timelinelist.append(view.render().el);
        },

        filterOne: function(timeLineItem) {
            timeLineItem.trigger('visible');
        },

        filterAll: function() {
            console.log('filter triggered by router');
            TimeLineItems.each(this.filterOne, this);
        },

    });

    return TimeLineAppView;
});
