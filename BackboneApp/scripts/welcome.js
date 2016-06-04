define(['jquery', 'underscore', 'backbone', 'marionette', './welcome.html!text'], function($, _, Backbone, Marionette, Template){
    var Welcome = Marionette.ItemView.extend({
        template: Template,
        events:{
            'click .button-jq-aurelia': function(e){
                e.preventDefault();
                var value = $('.module-jq-aurelia').val();
                $.aurelia = value;
                $('.global-jq-aurelia').text(window.$.aurelia);
            },
            'click .button-under-aurelia': function(e){
                e.preventDefault();
                var value = $('.module-under-aurelia').val();
                _.aurelia = value;
                $('.global-under-aurelia').text(window._.aurelia);
            },
            'click .button-backbone-aurelia': function(e){
                e.preventDefault();
                var value = $('.module-backbone-aurelia').val();
                Backbone.aurelia = value;
                $('.global-backbone-aurelia').text(window.Backbone.aurelia);
            }
        }
    });
    return Welcome;
});
