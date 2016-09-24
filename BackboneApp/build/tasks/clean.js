var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');

gulp.task('clean-scripts', function() {
    return gulp.src([paths.scriptsOutputRoot])
    .pipe(vinylPaths(del));
});

gulp.task('clean-html', function () {
    return gulp.src([paths.htmlOutputRoot])
    .pipe(vinylPaths(del));
});

gulp.task('clean-styles', function() {
    return gulp.src([paths.stylesOutputRoot])
    .pipe(vinylPaths(del));
});

gulp.task('clean-dist', function () {
    return gulp.src([paths.distOutputRoot])
    .pipe(vinylPaths(del));
});

gulp.task('clean-all', function(callback) {
    return runSequence(['clean-scripts', 'clean-html', 'clean-styles', 'clean-dist'], callback);
});