/*jslint browser: true, sloppy: true, nomen: true, maxerr: 50, indent: 4 */
/*global define,require*/

define(['use!backbone'], function (Backbone) {
    var BookModel = Backbone.Model.extend({}),
        myBook = new BookModel({name: 'The Da Vinci Code', description: 'A bit rubbish'});
    return myBook;
});
