
(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (root.hasOwnProperty('angular')) {
    // Browser globals (root is window), we don't register it.
    factory(root.angular);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'));
  }
}(this , function (angular) {
  'use strict';

  // In cases where Angular does not get passed or angular is a truthy value
  // but misses .module we can fall back to using window.
  angular = (angular && angular.module ) ? angular : window.angular;

  return angular
          .module('ngArrayCookies', ['ngCookies'])
          .decorator('$cookies', CookiesDecorator);

  //---

  function CookiesDecorator($delegate) {

    $delegate.appendObject = appendObject;
    $delegate.unshiftObject = unshiftObject;
    $delegate.spliceObject = spliceObject;

    return $delegate;

    //---

    function update(method, key, value, config, autoCreate) {
      autoCreate = angular.isUndefined(autoCreate) ? true : autoCreate;

      var obj = $delegate.getObject(key);
      if(angular.isArray(obj)) {
        if(method == 'append') {
          if(angular.isArray(value)) {
            obj = obj.concat(value);
          } else {
            obj.push(value);
          }
        } else {
          if(angular.isArray(value)) {
            obj = value.concat(obj);
          } else {
            obj.unshift(value);
          }
        }

        return angular.isObject(config) ? $delegate.putObject(key, obj, config) : $delegate.putObject(key, obj);
      } else if(autoCreate) {
        return $delegate.putObject(key, [value], config || {});
      } else {
        return false;
      }
    }

    //---

    function unshiftObject(key, value, config, autoCreate) {
      return update('unshift', key, value, config, autoCreate);
    }

    //---

    function appendObject(key, value, config, autoCreate) {
      return update('append', key, value, config, autoCreate);
    }

    //---

    function spliceObject(key, index, amount, config) {
      var obj = $delegate.getObject(key);
      if(angular.isArray(obj)) {
        obj.splice(index, amount || 1);
        return angular.isObject(config) ? $delegate.putObject(key, obj, config) : $delegate.putObject(key, obj);
      } else {
        return false;
      }
    }

  }

}));
