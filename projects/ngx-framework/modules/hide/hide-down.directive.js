import { 
  Class,
  Directive,
  ElementRef,
  Renderer
 } from '@angular/core';

import { ngxBaseHide } from './models/base-hide.model';


export var ngxHideDownDirectiveMetadata = Class({
  constructor: function ngxHideDownDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-hide-down]',
      inputs: ['breakpoint:ngx-hide-down', 'initCssClass:class']
    });
  }
});

export var ngxHideDownDirective = Directive(new ngxHideDownDirectiveMetadata())
.Class({
  extends: ngxBaseHide,

  constructor: [
    ElementRef,
    Renderer,

    function ngxHideDownDirective(elementRef, renderer) {
      ngxBaseHide.apply(this, arguments);
    }
  ],

  getPrefixClass: function () {
    return 'ngx-hide-down';
  }
});