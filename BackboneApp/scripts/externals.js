define(['marionette', './externals.html!text'], function(Marionette, Template){
    var Externals = Marionette.ItemView.extend({
        template: Template,
        events:{
            'click .button-back-externals': function(e){
                e.preventDefault();
                var _this = this;
                requirejs(['wwwroot/commonModule/common.js'], function(common){
                    var text = _this.$el.find("input").val();
                    common.decorate(text, function(decoratedText){
                        _this.$el.find('.decorated-text').text(decoratedText);
                    });
                });
            }
        }
    });
    return Externals;
});
