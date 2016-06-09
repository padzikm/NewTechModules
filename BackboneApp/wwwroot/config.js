System.config({
  baseURL: "/backboneapp/wwwroot/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "src/*",
    "dist/*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/app-build.js": [
      "app.js",
      "externals.html!github:systemjs/plugin-text@0.0.3.js",
      "externals.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:marionettejs/backbone.babysitter@0.1.12.js",
      "github:marionettejs/backbone.babysitter@0.1.12/lib/backbone.babysitter.js",
      "github:marionettejs/backbone.marionette@2.4.7.js",
      "github:marionettejs/backbone.marionette@2.4.7/lib/core/backbone.marionette.js",
      "github:marionettejs/backbone.wreqr@1.3.7.js",
      "github:marionettejs/backbone.wreqr@1.3.7/lib/backbone.wreqr.js",
      "layout.html!github:systemjs/plugin-text@0.0.3.js",
      "layout.js",
      "menu.html!github:systemjs/plugin-text@0.0.3.js",
      "menu.js",
      "npm:backbone@1.3.3.js",
      "npm:backbone@1.3.3/backbone.js",
      "npm:jquery@2.2.0.js",
      "npm:jquery@2.2.0/dist/jquery.js",
      "npm:process@0.11.3.js",
      "npm:process@0.11.3/browser.js",
      "npm:underscore@1.8.3.js",
      "npm:underscore@1.8.3/underscore.js",
      "router.js",
      "welcome.html!github:systemjs/plugin-text@0.0.3.js",
      "welcome.js"
    ]
  },
  meta: {
    "npm:jquery@2.2.0/dist/jquery.js": {
      "format": "cjs"
    },
    "github:marionettejs/backbone.marionette@2.4.7/lib/core/backbone.marionette": {
      "format": "cjs"
    }
  },
  map: {
    "backbone": "npm:backbone@1.3.3",
    "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.12",
    "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.7",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "npm:jquery@2.2.0",
    "marionette": "github:marionettejs/backbone.marionette@2.4.7",
    "text": "github:systemjs/plugin-text@0.0.3",
    "underscore": "npm:underscore@1.8.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:backbone@1.3.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});