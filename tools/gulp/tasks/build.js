module.exports = function(gulp, $) {

  gulp.task('build', ['clean', 'validate'], function() {
    return gulp.src($.config.js.build)
      .pipe($.uglify())
      .pipe($.injectString.prepend($.config.banner))
      .pipe($.concat('ngArrayCookies.min.js'))
      .pipe(gulp.dest($.config.paths.dist));
  });

};
