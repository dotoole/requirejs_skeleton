/*jslint browser: true, sloppy: true, nomen: true, maxerr: 50, indent: 4 */
/*global define,require*/


require.config({
    paths: {
        jquery: 'lib/jquery/jquery-1.7.2',
        jqueryui: 'lib/jquery/jquery-ui-1.8.18.custom.min',
        backbone: 'lib/backbone/backbone',
        underscore: 'lib/underscore/underscore',
        use: 'lib/requirejs/use'  //Shims https://github.com/derickbailey/backbone.marionette/issues/29
    },
    use: {
        backbone: {
            deps: ['use!underscore', 'jquery'],
            attach: function (_, $) { return Backbone; }
        },
        underscore: { attach: '_' }
    }


});

require(['book/view'], function (BookView) {
    var bookView = new BookView();
    bookView.render();
});
