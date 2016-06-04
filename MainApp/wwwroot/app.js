define(['./router', './view'], function (Router, View) {
    var router = new Router();
    var view = new View({ router: router });
    $("#page").html(view.render().el);
    Backbone.history.start();
});