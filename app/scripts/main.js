/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'jquery'
        },
        jqueryui: {
            deps: [
                'jquery'
            ]
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        jqueryui: '../bower_components/jquery.ui/ui',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
    }
});

require([
    'jquery',
    'examples'
], function ($, examples) {
    $(document).ready(function(){
        examples();
    });
});
