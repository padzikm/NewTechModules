import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
    
    if(window.Backbone){
	    Backbone.Events.once("changeRouteEvent", () => {
		    aurelia.root.unbind();
		    aurelia.root.detached();
		    aurelia.hostSlot.unbind();
		    aurelia.hostSlot.detached();
		    aurelia.hostSlot.removeAll();
		    aurelia.root.viewModel.router.deactivate();
	    });
    }
  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
