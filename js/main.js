/*jslint browser: true, sloppy: true, nomen: true, maxerr: 50, indent: 4 */
/*global define,require*/

require.config({
    baseUrl: "js",
    paths: {
        jquery: 'lib/jquery/jquery-1.7.2',
        jqueryui: 'lib/jquery/jquery-ui-1.8.18.custom.min',
        backbone: 'lib/backbone/backbone',
        underscore: 'lib/underscore/underscore',
        'underscore.string': 'underscore.string'
    }
});

require(['jquery'], function ($) {
    console.log(window.history);
    /*
    $('#comp1').on('click', function() { alert('comp1'); });
    $('#comp2').on('click', function() { alert('comp2'); });
    $('#comp3').on('click', function() { alert('comp3'); });
    */
});