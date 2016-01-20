module.exports = function(gulp, $) {

  gulp.task('bump', function() {
    gulp.src([$.rootPath + '/bower.json', $.rootPath + '/package.json'])
      .pipe($.bump())
      .pipe(gulp.dest($.rootPath));
  });

};