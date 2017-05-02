/* gulpfile.js */

/* Plugins */
const gulp             = require('gulp'),
      gutil            = require('gulp-util'),
      sync             = require('gulp-npm-script-sync'),
      fs               = require('fs'),
      ftp              = require('vinyl-ftp'),
      minimist         = require('minimist');

/* I - O  */
var localDeploy  = require('./config.json');

/* Task Library */
gulp.task('deploy', require('./gulp-tasks/ftp-deploy')(gulp, ftp, minimist));

sync(gulp, {
  path: './package.json',
  excluded: ['default']
});
