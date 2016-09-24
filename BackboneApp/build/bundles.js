module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
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
