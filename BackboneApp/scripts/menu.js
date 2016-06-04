define(['backbone', 'marionette', './menu.html!text'], function(Backbone, Marionette, Template){
    var Menu = Marionette.ItemView.extend({
        template: Template,
        events:{
            'click a[href^="#backboneApp/"]': function(e){
                this.$el.find("a").closest("li").removeClass("active");
                $(e.target).closest("li").addClass("active");
            }
        },
        onRender: function(){
            var uri = Backbone.history.getFragment();
            var hashUri = "#" + uri;
            var anchor = this.$el.find("a[href='" + hashUri + "']");
            if(anchor.length === 0)
                anchor = this.$el.find("a[href='#backboneApp/welcome']");
            anchor.closest("li").addClass("active");
        }
    });
    return Menu;
})