define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Home = Backbone.Model.extend({

        defaults: {
            homeInterests: 'Unknown',
            currentReadings: 'Unknown',
            projectNumber: 0,
            currentEmployer: '',
            myContact: 'glc12125@gmail.com'
        },

        parse: function( response ) {
            response.id = response._id;
            return response;
        }

    });

    return Home;
});