var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var rename = require("gulp-rename");

gulp.task('browserify', function() {

  var b = browserify({
    basedir: '.',
    entries: 'app.js',
    debug: true,
    insertGlobals: true
  });

//  b.transform({
//    global: true
//  }, ngAnnotate);
//
//  b.transform({
//    global: true
//  }, uglifyify);

  b.bundle()
    .pipe(source('app.js'))
    .pipe(streamify(rename({suffix: '.min'})))
    .pipe(gulp.dest('dist'));

});