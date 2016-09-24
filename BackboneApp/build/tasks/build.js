var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');

gulp.task('build-scripts', function() {
    return gulp.src(paths.scripts)
    .pipe(changed(paths.scriptsOutputRoot, { extension: '.js' }))
    .pipe(gulp.dest(paths.scriptsOutputRoot));
});

gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.htmlOutputRoot, { extension: '.html' }))
    .pipe(gulp.dest(paths.htmlOutputRoot));
});

gulp.task('build-styles', function() {
  return gulp.src(paths.styles)
    .pipe(changed(paths.stylesOutputRoot, { extension: '.css' }))
    .pipe(gulp.dest(paths.stylesOutputRoot));
});

gulp.task('build-all', function(callback) {
  return runSequence(['build-scripts', 'build-html', 'build-styles'], callback);
});
