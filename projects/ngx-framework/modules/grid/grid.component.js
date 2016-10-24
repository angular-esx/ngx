import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseComponent } from '../../cores';


export var ngxGridComponentMetadata = Class({
  constructor: function ngxGridComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-grid',
      templateUrl: './templates/grid.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['type', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxGridComponent = Component(new ngxGridComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ngxGridComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  getPrefixClass: function () {
    return 'ngx-grid';
  }
});