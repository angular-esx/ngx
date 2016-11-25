import { 
  Class,
  Directive,
  ElementRef,
  Renderer
 } from '@angular/core';

import { ngxBaseHide } from './models/base-hide.model';


export var ngxHideUpDirectiveMetadata = Class({
  constructor: function ngxHideUpDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-hide-up]',
      inputs: ['breakpoint:ngx-hide-up', 'initCssClass:class']
    });
  }
});

export var ngxHideUpDirective = Directive(new ngxHideUpDirectiveMetadata())
.Class({
  extends: ngxBaseHide,

  constructor: [
    ElementRef,
    Renderer,

    function ngxHideUpDirective(elementRef, renderer) {
      ngxBaseHide.apply(this, arguments);
    }
  ],

  getPrefixClass: function () {
    return 'ngx-hide-up';
  }
});