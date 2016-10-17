import { 
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseComponent } from '../../cores';


export var ngxGridComponent = Component({
  selector: 'ngx-grid',
  templateUrl: './templates/grid.html',
  styleUrls: ['./styles/grid.scss'],
  inputs: ['type', 'initCssClass:class'],
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
    return 'ngx-grid';
  }
});