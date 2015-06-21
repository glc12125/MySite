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
        },
        mycollapse: {
            deps: [
                'jquery'
            ],
            exports: "MyCollapse"
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap.min',
        mycollapse: '../custom_elements/paper-collapse.min',
        text: '../node_modules/requirejs-text/text'
    }
});

require([
    'backbone',
    'mycollapse',
    'views/resumeapp'
], function (Backbone, MyCollapse, ResumeAppView) {
    new ResumeAppView();
});
