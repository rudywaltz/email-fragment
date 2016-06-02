'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var config = require('../config/jade');

gulp.task('jade', function() {
  gulp.src(config.src)
    .pipe(jade(config.opts))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }))
});
