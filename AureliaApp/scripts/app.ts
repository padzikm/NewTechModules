import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['aureliaApp', 'aureliaApp/welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'aureliaApp/externals',         name: 'externals',        moduleId: 'externals',        nav: true, title: 'Externals' },
      { route: 'aureliaApp/child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
