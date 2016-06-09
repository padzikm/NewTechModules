define(['jquery', 'underscore', 'backbone', 'marionette', './welcome.html!text'], function($, _, Backbone, Marionette, Template){
    var Welcome = Marionette.ItemView.extend({
        template: Template,
        events:{
            'click .button-jq-aurelia': function(e){
                e.preventDefault();
                var value = $('.module-jq-aurelia').val();
                $.aurelia = value;
                $('.global-jq-aurelia').text(window.$.aurelia);
                this.displayLibrariesVersions();
            },
            'click .button-under-aurelia': function(e){
                e.preventDefault();
                var value = $('.module-under-aurelia').val();
                _.aurelia = value;
                $('.global-under-aurelia').text(window._.aurelia);
                this.displayLibrariesVersions();
            },
            'click .button-backbone-aurelia': function(e){
                e.preventDefault();
                var value = $('.module-backbone-aurelia').val();
                Backbone.aurelia = value;
                $('.global-backbone-aurelia').text(window.Backbone.aurelia);
                this.displayLibrariesVersions();
            }
        },
        onRender: function(){
            this.displayLibrariesVersions();
        },
        displayLibrariesVersions: function(){
            this.$el.find("#globalJqVer").text(window.$.fn.jquery);
            this.$el.find("#moduleJqVer").text($.fn.jquery);
            this.$el.find("#globalUnderVer").text(window._.VERSION);
            this.$el.find("#moduleUnderVer").text(_.VERSION);
            this.$el.find("#globalBackVer").text(window.Backbone.VERSION);
            this.$el.find("#moduleBackVer").text(Backbone.VERSION);
        }
    });
    return Welcome;
});
