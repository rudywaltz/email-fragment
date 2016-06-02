'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var configJade = require('../config/jade');

gulp.task('default',['clean', 'copy', 'jade', 'browserSync'], function() {
  watch(configJade.src, function() { gulp.start('jade'); });
});
