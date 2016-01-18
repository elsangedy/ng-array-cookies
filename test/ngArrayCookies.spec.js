'use strict';

/* global describe, beforeEach, it, module, inject, expect, chai */

describe('ngArrayCookies', function() {

  beforeEach(function() {
    module('ngArrayCookies');
    inject(function($cookies) {
      $cookies.remove('test');
    });
  });

  it('should contain a $cookies service', inject(function($cookies) {
    expect($cookies).toBeDefined();
  }));

  it('should contain a appendObject method in $cookies service', inject(function($cookies) {
    expect($cookies.appendObject).toBeDefined();
  }));

  it('should contain a unshiftObject method in $cookies service', inject(function($cookies) {
    expect($cookies.unshiftObject).toBeDefined();
  }));

  it('should contain a spliceObject method in $cookies service', inject(function($cookies) {
    expect($cookies.spliceObject).toBeDefined();
  }));

  it('should create new cookie when key doesn\'t exist and autoCreate param equals empty', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.appendObject('test', value);

    expect($cookies.getObject('test')).toContain(value);
  }));

  it('should create new cookie when key doesn\'t exist and autoCreate param equals true', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.appendObject('test', value, {}, true);

    expect($cookies.getObject('test')).toContain(value);
  }));

  it('should return undefined when key doesn\'t exist and autoCreate param equals false', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.appendObject('test', value, {}, false);

    expect($cookies.getObject('test')).toBeUndefined();
  }));

});