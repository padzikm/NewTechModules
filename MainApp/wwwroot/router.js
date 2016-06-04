define([], function () {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "homeApp",
            "homeApp": "homeApp",
            "aureliaApp*any": "aureliaApp",
            "backboneApp*any": "backboneApp"
        },
        homeApp: function () {
            Backbone.Events.trigger("changeRouteEvent");
            $("#content").html("<h2>Simple main page</h2>");
        },
        aureliaApp: function () {
            Backbone.Events.trigger("changeRouteEvent");
            $.ajax({
                method: "GET",
                url: "/AureliaApp/Home/Index",
                success: function (data) {
                    $("#content").html(data);
                }
            });
            // require(['text!/AureliaApp/Home/Index'],function(data){
            // 	$("#content").html(data);
            // });
        },
        backboneApp: function () {
            Backbone.Events.trigger("changeRouteEvent");
            $.ajax({
                method: "GET",
                url: "/BackboneApp/Home/Index",
                success: function (data) {
                    $("#content").html(data);
                }
            });
            // require(['text!/BackboneApp/Home/Index'],function(data){
            // 	$("#content").html(data);
            // });
        }
    });
    return AppRouter;
});