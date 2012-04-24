/*jslint browser: true, sloppy: true, nomen: true, maxerr: 50, indent: 4 */
/*global define,require*/

define(['jquery', 'use!underscore', 'use!backbone', 'book/model', 'jqueryui'], function ($, _, Backbone, myBook) {
    var BookView = Backbone.View.extend({
        el: '#content',

        events: {'click h2' : 'flash'},

        template: _.template($('#bookTemplate').html()),

        initialize: function () {
            this.model = myBook;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        flash: function (event) {
            this.$('h2').effect('pulsate');
        }
    });

    return BookView;
});
