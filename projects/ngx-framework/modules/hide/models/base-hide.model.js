import { 
  Class,
  ElementRef,
  Renderer
} from '@angular/core';

import { ngxBaseDirective, ngxUtils } from  '../../../cores';

var _STYLE_PROPERTIES;


export var ngxBaseHide = Class({
  extends: ngxBaseDirective,

  constructor: [
    ElementRef,
    Renderer,

    function ngxBaseHide(elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ],

  getStyleProperties: function () {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = Object.assign({ 
        BREAKPOINT: 'breakpoint' 
      }, ngxBaseDirective.prototype.getStyleProperties.apply(this, arguments));
    }

    return _STYLE_PROPERTIES;
  },

  buildCssClassForProperty: function (propertyName, propertyValue) {
    var _cssClass = ngxBaseDirective.prototype.buildCssClassForProperty.apply(this, arguments);

    if(propertyName === this.getStyleProperties().BREAKPOINT){
      _cssClass = _cssClass.replace(new RegExp(propertyName + '-', 'g'), '');
    }
    
    return _cssClass;
  }
});