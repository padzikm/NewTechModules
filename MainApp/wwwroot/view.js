define(['text!./view.html'], function (text) {
    return Backbone.View.extend({
        initialize: function (opt) {
            this.router = opt.router;
            var _this = this;
            Backbone.history.on("route", function(router, route){
                if(route && route !== ""){
                    _this.$el.find(".active").removeClass("active");
                    _this.$el.find("#" + route).closest("li").addClass("active");
                }
            });
        },
        events: {
            "click a.main-menu": function (e) {
                e.preventDefault();
                var id = e.target.id;
                this.router.navigate(id, { trigger: true });
            }
        },
        render: function () {
            this.$el.html(text);
            return this;
        }
    });
});