/*jslint browser: true, sloppy: true, nomen: true, maxerr: 50, indent: 4 */
/*global define,require*/

require.config({
    baseUrl: 'js',
    packages: ['component1', 'component2', 'component3'],
    paths: {
        jquery: 'lib/jquery/jquery-1.7.2',
        jqueryui: 'lib/jquery/jquery-ui-1.8.18.custom.min',
        backbone: 'lib/backbone/backbone',
        underscore: 'lib/underscore/underscore',
        'underscore.string': 'underscore.string'
    }
});

require(['jquery'], function ($) {
    $('#content').html('Main Application Module');
});