var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var typescript = require('gulp-typescript');
var tsc = require('typescript');
var merge = require('merge2');

var tsProject = typescript.createProject('./tsconfig.json', { typescript: tsc });

gulp.task('build-scripts', function() {
    var tsResult = gulp.src(paths.dtsSrc.concat(paths.scripts))
        .pipe(plumber())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(changed(paths.scriptsOutputRoot, { extension: '.js' }))
        .pipe(typescript(tsProject));
    return merge([
        tsResult.js
            .pipe(sourcemaps.write({ includeContent: true }))
            .pipe(gulp.dest(paths.scriptsOutputRoot)),
        tsResult.dts
            .pipe(gulp.dest(paths.dtsOutput))
    ]);
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
