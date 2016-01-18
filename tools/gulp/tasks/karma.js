module.exports = function(gulp, $) {

  karma = require('gulp-karma');

  gulp.task('karma', function (done) {
    return gulp.src('./foobar')
      .pipe(karma({
        configFile: $.rootPath + '/tools/karma.config.js',
        action: 'run'
      }))
      .on('error', function(err) {
        // Make sure failed tests cause gulp to exit non-zero
        console.log(err);
        this.emit('end'); //instead of erroring the stream, end it
      });
  });

};