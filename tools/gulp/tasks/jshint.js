module.exports = function(gulp, $) {

  gulp.task('jshint', function() {
    return gulp.src($.config.js.lint)
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.jshint.reporter('fail'));
  });

};