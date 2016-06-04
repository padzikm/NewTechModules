define(['marionette', './layout.html!text'], function (Marionette, Template) {
    var LayoutView = Marionette.LayoutView.extend({
        template: Template,
        regions: {
            menu: "#backboneAppMenu",
            content: "#backboneAppContent"
        }
    });
    return LayoutView;
});