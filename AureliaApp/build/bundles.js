module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "*.js",
        "*.html!text"
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": false,
        "rev": false,
        "sourceMaps": true
      }
    }
   }
};
