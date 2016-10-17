import { 
  Directive,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseDirective, ngxUtils } from  '../../cores';

var _STYLE_PROPERTIES;


export var ngxGridColDirective = Directive({
  selector: 'ngx-grid-col',
  inputs: [
    'size', 
    'offset', 
    'order',
    'initCssClass:class'
  ]
})
.Class({
  extends: ngxBaseDirective,

  constructor: [
    ElementRef,
    Renderer,

    function (elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ],

  getPrefixClass: function () {
    return 'ngx-grid-col';
  },

  getStyleProperties: function() {
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = {
        SIZE: 'size',
        OFFSET: 'offset',
        ORDER: 'order'
      };

      Object.assign(_STYLE_PROPERTIES, ngxBaseDirective.prototype.getStyleProperties.apply(this));
    }

    return _STYLE_PROPERTIES;
  },

  buildCssClassForProperty: function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(
      propertyName === _styleProperties.SIZE || 
      propertyName === _styleProperties.OFFSET ||
      propertyName === _styleProperties.ORDER
    ){
      if (ngxUtils.isEmpty(propertyValue)) { return ''; }
      
      var _parts,
          _cssClasses = [],
          _values = propertyValue.split(' '),
          _prefixClass = this.getPrefixClass(),
          _propertyName = ngxUtils.toHyphenCase(propertyName);

      _values.forEach(function (value) {
        _parts = value.split('-');

        if (_parts.length === 2) {
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1]].join('-'));
        }
        else if(_parts.length === 3){
          _cssClasses.push([_prefixClass, _parts[0], _propertyName, _parts[1] + '-' + _parts[2]].join('-'));
        }
      });

      return _cssClasses.length === 0 ? '' : _cssClasses.join(' ');
    }
    else{
      return ngxBaseDirective.prototype.buildCssClassForProperty.apply(this, arguments);
    }
  }
});