import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent } from  '../../cores';


export var ngxCardHeaderComponentMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: 'ngx-card-header',
      templateUrl: './templates/card-header.html',
      inputs: ['initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxCardHeaderComponent = Component(new ngxCardHeaderComponentMetadata())
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
    return 'ngx-card-header';
  }
});