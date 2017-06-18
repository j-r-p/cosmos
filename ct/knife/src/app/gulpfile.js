var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var rename = require("gulp-rename");
var templateCache = require('gulp-angular-templatecache'); 
var addStream = require('add-stream');
gulp.task('build', function() {

  var b = browserify({
    basedir: '.',
    entries: 'index.js',
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
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(gulp.dest('./public'));


});

function prepareTemplates() {
	  return gulp.src('**/*.tmp.html')
	    //.pipe(minify and preprocess the template html here)
	    .pipe(templateCache());
}
