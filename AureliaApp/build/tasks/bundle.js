var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');

var config = {
  force: true,
  baseURL: './wwwroot',
  configPath: './wwwroot/config.js',
  bundles: bundles.bundles
};

gulp.task('bundle-all', function() {
  return bundler.bundle(config);
});
