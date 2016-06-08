define(['backbone', 'marionette', './router'], function(Backbone, Marionette, Router){
  
  var router = null;

  function runCustom(firstLoad){
    if(firstLoad){
      Marionette.Renderer.render = function (template, data) {
        var compiled = _.template(template);
        var templ = compiled(data);
        return templ;
      };
      
      router = new Router();
    }

    window.Backbone.Events.once("changeRouteEvent", function() {
                    Backbone.history.stop();
                    router.clean();
                });
    
    Backbone.history.start();
  }
  
  return {
    'runCustom': runCustom,
  };
});