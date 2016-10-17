import {
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent } from  '../../cores';


export var ngxCardTextComponent = Component({
  selector: 'ngx-card-text',
  templateUrl: './templates/card-text.html',
  inputs: ['initCssClass:class'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function (elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  getPrefixClass: function () {
    return 'ngx-card-text';
  }
});