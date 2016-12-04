import { Class, Optional } from '@angular/core';

var _PROPERTIES = ['hostElement', 'templateRef', 'content', 'state', 'position', 'delay', 'autoHide'];


export var ngxTooltipOption = Class({
  constructor: [
    [new Optional(), null],
    //options:{ hostElement, templateRef, content, state, position, delay, autoHide }
    function ngxTooltipOption(options) {
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