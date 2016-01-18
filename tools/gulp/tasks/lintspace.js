module.exports = function(gulp, $) {

  gulp.task('lintspaces', function() {
    return gulp.src($.config.js.lint)
      .pipe($.lintspaces({editorconfig: '.editorconfig'}))
      .pipe($.lintspaces.reporter());
  });

};