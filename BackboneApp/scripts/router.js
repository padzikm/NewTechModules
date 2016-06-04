define(['backbone', './layout', './menu', './welcome', './externals'], function (Backbone, Layout, Menu, Welcome, Externals) {
    var layoutView = null;
    
    function renderLayout(){
        layoutView = new Layout();
        $("#backboneAppPage").html(layoutView.render().$el);
        var menu = new Menu();
        layoutView.getRegion('menu').show(menu);
    }
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            "backboneApp": "welcome",
            "backboneApp/welcome": "welcome",
            "backboneApp/externals": "externals"
        },
        welcome: function () {
            if(layoutView == null)
                renderLayout();
            var view = new Welcome();
            layoutView.getRegion('content').show(view);
        },
        externals: function () {
            if(layoutView == null)
                renderLayout();
            var view = new Externals();
            layoutView.getRegion('content').show(view);
        },
        clean: function(){
            layoutView.destroy();
            layoutView = null;
        }
    });
    return AppRouter;
});