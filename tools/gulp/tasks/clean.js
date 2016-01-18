module.exports = function(gulp, $) {

  gulp.task('clean', $.del.bind(null, [
    $.config.paths.dist
  ]));

};