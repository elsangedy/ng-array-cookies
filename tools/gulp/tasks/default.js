module.exports = function(gulp, $) {

  gulp.task('default', ['clean', 'validate', 'watch'], function() {
    $.projectInfoMsg();
  });

};
