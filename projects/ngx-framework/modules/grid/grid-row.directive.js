import { 
  Class,
  Directive,
  ElementRef,
  Renderer
} 
from '@angular/core';

import { ngxBaseDirective, ngxUtils } from  '../../cores';


export var ngxGridRowDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: 'ngx-grid-row',
      inputs: [ 'initCssClass:class' ]
    });
  }
});

export var ngxGridRowDirective = Directive(new ngxGridRowDirectiveMetadata())
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
