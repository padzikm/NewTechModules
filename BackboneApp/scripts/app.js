define(['backbone', 'marionette', './router'], function(Backbone, Marionette, Router){
  
  function runCustom(){
    Marionette.Renderer.render = function (template, data) {
      var compiled = _.template(template);
      var templ = compiled(data);
      return templ;
    };
    
    var router = new Router();
    
    window.Backbone.Events.once("changeRouteEvent", function() {
                    Backbone.history.stop();
                    router.clean();
                    router = null;
                });
    
    Backbone.history.start();
  }
  
  return {
    'runCustom': runCustom,
  };
});