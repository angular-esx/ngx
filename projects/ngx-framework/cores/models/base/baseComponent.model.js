import { 
  Class,
  ElementRef,
  Renderer
} from '@angular/core';

import { ngxBaseDirective } from './baseDirective.model';


export var ngxBaseComponent = Class({
  extends: ngxBaseDirective,

  constructor: [
    ElementRef,
    Renderer,

    function (elementRef, renderer) {
      ngxBaseDirective.apply(this, arguments);
    }
  ],

  ngAfterViewInit: function () {},
  ngAfterViewChecked: function () {}
});