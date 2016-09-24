var appRoot = './';
var outputRoot = 'wwwroot/';

module.exports = {
  root: appRoot,
  scripts: 'scripts/**/*.js',
  html: 'templates/**/*.html',
  styles: 'styles/**/*.css',
  scriptsOutputRoot: outputRoot + 'src/',
  htmlOutputRoot: outputRoot + 'src/',
  stylesOutputRoot: outputRoot + 'styles/',
  distOutputRoot: outputRoot + 'dist/',
  outputRoot: outputRoot
}
