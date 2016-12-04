import { Class, Optional } from '@angular/core';

var _PROPERTIES = ['hostElement', 'templateRef', 'title', 'content', 'state', 'position', 'delay', 'autoHide'];


export var ngxPopoverOption = Class({
  constructor: [
    [new Optional(), null],
    //options:{ hostElement, title, templateRef, content, state, position, delay, autoHide }
    function ngxPopoverOption(options) {
      if (options) { this.assign(this, options); }
    }
  ],

  getProperties: function(){ return _PROPERTIES; },

  assign: function (target, options) {
    var _source = options || this,
        _properties = this.getProperties();

    Object.keys(_source)
    .filter(function(prop){ return _properties.indexOf(prop) > -1; })
    .forEach(function(prop){
      target[prop] = _source[prop];
    });
  }
});