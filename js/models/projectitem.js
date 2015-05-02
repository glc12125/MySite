define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProjectItem = Backbone.Model.extend({

        defaults: {
            projectSectionName: 'Unknown',
            sectionItems: 'None'
        },

        parse: function(response) {
            response.id = response._id;
            var i;
            for (i = 0; i < response.sectionItems.length; i++) {
                response.sectionItems[i].id = response.sectionItems[i]._id;
            }
            console.log(response);
            return response;
        }
    });

    return ProjectItem;
});
