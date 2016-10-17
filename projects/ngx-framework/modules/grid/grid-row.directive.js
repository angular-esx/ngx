import { 
  Directive,
  ElementRef,
  Renderer
} 
from '@angular/core';

import { ngxBaseDirective, ngxUtils } from  '../../cores';


export var ngxGridRowDirective = Directive({
  selector: 'ngx-grid-row',
  inputs: [ 'initCssClass:class' ]
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
    return 'ngx-grid-row';
  },
});
