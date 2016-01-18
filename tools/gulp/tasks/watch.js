module.exports = function(gulp, $) {

  gulp.task('watch', function() {
    gulp.watch($.config.js.watch, ['wf:js']);
  });

  //---

  gulp.task('wf:js', function( done ) {
    $.runSequence.apply(null, [
      [
        'jshint',
        'lintspaces'
      ],
      done
    ]);
  });

};