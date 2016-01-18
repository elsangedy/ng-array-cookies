// Expose all Gulp plugins found
var $ = module.exports = require('gulp-load-plugins')();

//---

// Expose some other modules
$.path = require('path');

$.rootPath = $.path.resolve( './' );

// [Gist] Better local require() paths for Node.js
// https://gist.github.com/branneman/8048520
$.rootRequire = function( name ) {
  return require( $.path.join( $.rootPath, name ) );
};

//---

$.del           = require('del');
$.lazypipe      = require('lazypipe');
$.runSequence   = require('run-sequence');
$.karma         = require('karma');

//--- local modules

$.pkg           = $.rootRequire('package.json');
$.config        = $.rootRequire('tools/config');

//---

/**
  * Log a message or series of messages using chalk's blue color.
  * Can pass in a string, object or array.
  */
$.log = function(msg, color) {
  color = color || $.util.colors.blue;
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log(color(msg[item]));
      }
    }
  } else {
    $.util.log(color(msg));
  }
};

$.onSuccess = function(msg) {
  $.log(msg, $.util.colors.green);
};

$.onError = function(err) {
  $.log(err, $.util.colors.red);
};

//---

$.projectInfoMsg = function() {
  $.log('');
  $.log('project: ' + $.pkg.name + ' v' + $.pkg.version);
  $.log('description: ' + $.pkg.description);
  $.log('');
};