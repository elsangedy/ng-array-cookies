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

  it('should create new cookie when call the method appendObject and key doesn\'t exist and autoCreate param equals empty', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.appendObject('test', value);

    expect($cookies.getObject('test')).toContain(value);
  }));

  it('should create new cookie when call the method appendObject and key doesn\'t exist and autoCreate param equals true', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.appendObject('test', value, {}, true);

    expect($cookies.getObject('test')).toContain(value);
  }));

  it('should return undefined when call the method appendObject and key doesn\'t exist and autoCreate param equals false', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.appendObject('test', value, {}, false);

    expect($cookies.getObject('test')).toBeUndefined();
  }));

  it('should append value at end of cookie array when key is defined and cookie exist', inject(function($cookies) {

    $cookies.appendObject('test', {name: 'test1'});

    $cookies.appendObject('test', {name: 'test2'});

    expect($cookies.getObject('test')).toEqual([{name: 'test1'}, {name: 'test2'}]);
  }));

  it('should create new cookie when call the method unshiftObject and key doesn\'t exist and autoCreate param equals empty', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.unshiftObject('test', value);

    expect($cookies.getObject('test')).toContain(value);
  }));

  it('should create new cookie when call the method unshiftObject and key doesn\'t exist and autoCreate param equals true', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.unshiftObject('test', value, {}, true);

    expect($cookies.getObject('test')).toContain(value);
  }));

  it('should return undefined when call the method unshiftObject and key doesn\'t exist and autoCreate param equals false', inject(function($cookies) {

    var value = {
      name: 'test'
    };

    $cookies.unshiftObject('test', value, {}, false);

    expect($cookies.getObject('test')).toBeUndefined();
  }));

  it('should append value in early of cookie array when key is defined and cookie exist', inject(function($cookies) {

    $cookies.appendObject('test', {name: 'test1'});

    $cookies.unshiftObject('test', {name: 'test2'});

    expect($cookies.getObject('test')).toEqual([{name: 'test2'}, {name: 'test1'}]);
  }));

  it('should return false when call the method spliceObject and cookie not is array', inject(function($cookies) {

    $cookies.putObject('test', 'value');

    expect($cookies.spliceObject('test', 0)).toEqual(false);
  }));

  it('should return false when call the method spliceObject and cookie not exist', inject(function($cookies) {

    $cookies.spliceObject('test', 0);

    expect($cookies.spliceObject('test', 0)).toEqual(false);
  }));

  it('should return false when call the method spliceObject and key not exist', inject(function($cookies) {

    $cookies.appendObject('test', {name: 'test1'});

    expect($cookies.spliceObject('test', 1)).toEqual(false);
  }));

  it('should remove one item when call the method spliceObject and cookie exist and key exist and param amout equal to undeifned', inject(function($cookies) {

    $cookies.appendObject('test', {name: 'test1'});
    $cookies.appendObject('test', {name: 'test2'});

    $cookies.spliceObject('test', 0);

    expect($cookies.getObject('test')).toEqual([{name: 'test2'}]);
  }));

  it('should remove two items when call the method spliceObject and cookie exist and key exist and param amout equal to 2', inject(function($cookies) {

    $cookies.appendObject('test', [{name: 'test1'}, {name: 'test2'}, {name: 'test3'}]);

    $cookies.spliceObject('test', 0, 2);

    expect($cookies.getObject('test')).toEqual([{name: 'test3'}]);
  }));

  it('should remove the items according to the value passed in the parameter amount', inject(function($cookies) {

    $cookies.appendObject('test', ['test1', 'test2', 'test3',' teste4', 'teste5']);

    $cookies.spliceObject('test', 2, 10);

    expect($cookies.getObject('test')).toEqual(['test1', 'test2']);
  }));

});
