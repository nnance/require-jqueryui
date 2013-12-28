/*global define*/

define([
    'jqueryui/jquery.ui.core',
    'jqueryui/jquery.ui.widget',
    'jqueryui/jquery.ui.button',
    'jqueryui/jquery.ui.datepicker',
    'jqueryui/jquery.ui.spinner'
], function (JQCore, JQWidget, JQButton, JQDatePicker, JQSpinner) {
    'use strict';

    return function() {
        $('#datepicker').datepicker();
    }
});
