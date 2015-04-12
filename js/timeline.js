/*global require*/
'use strict';

require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore', 
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'Bootstrap'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
        text: '../node_modules/requirejs-text/text'
    }
});

require([
    'backbone',
    'views/timelineapp',
    'routers/timelinerouter'
], function (Backbone, TimeLineAppView, TimeLineRouter) {
    // Initialize routing and start Backbone.history()
    new TimeLineRouter();
    Backbone.history.start();
    new TimeLineAppView();
});