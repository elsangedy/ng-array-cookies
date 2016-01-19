module.exports = (function() {

  var path          = require('path'),
      pkg           = require('../package');

  //---

  var config = {};

  //---

  config.root = './';

  //---

  config.packages = [
    './package.json'
  ];

  //---

  var bannerTitle = pkg.title || pkg.name;

  config.banner =
      '/*!\n' +
      ' * ' + bannerTitle + '\n' +
      ' * ' + pkg.description + '\n' +
      ' * @license ' + pkg.license + '\n' +
      ' * v' + pkg.version + '\n' +
      ' */\n';

  //---

  config.paths = {
    src   : 'src',
    dist  : 'dist'
  };

  //---

  config.js = {
    lint: [
      config.paths.src + '/**/*.js'
    ],
    watch: [
      config.paths.src + '/**/*.js'
    ],
    build: [
      config.paths.src + '/**/*.js'
    ]
  };

  //---

  return config;

})();