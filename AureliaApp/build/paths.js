var appRoot = './';
var outputRoot = 'wwwroot/';

module.exports = {
  root: appRoot,
  scripts: 'scripts/**/*.ts',
  html: 'templates/**/*.html',
  styles: 'styles/**/*.css',
  scriptsOutputRoot: outputRoot + 'src/',
  htmlOutputRoot: outputRoot + 'src/',
  stylesOutputRoot: outputRoot + 'styles/',
  distOutputRoot: outputRoot + 'dist/',
  outputRoot: outputRoot,
  dtsSrc: [
    './typings/**/*.d.ts',
    './custom_typings/**/*.d.ts',
    './wwwroot/jspm_packages/**/*.d.ts'
  ],
  dtsOutput: "custom_typings"
}
