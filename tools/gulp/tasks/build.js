module.exports = function(gulp, $) {

  gulp.task('build', function(done) {
    $.runSequence.apply(null, [
      [
        'karma',
        'clean',
        'validate'
      ],
      'build:concat',
      done
    ]);
  });

  gulp.task('build:concat', function() {
    return gulp.src($.config.js.build)
      .pipe($.uglify())
      .pipe($.injectString.prepend($.config.banner))
      .pipe($.concat('ngArrayCookies.min.js'))
      .pipe(gulp.dest($.config.paths.dist));
  });

};
