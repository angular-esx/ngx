import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseComponent } from '../../cores';


export var ngxJumbotronComponentMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: 'ngx-jumbotron',
      templateUrl: './templates/jumbotron.html',
      styleUrls: ['./styles/jumbotron.scss'],
      inputs: ['initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxJumbotronComponent = Component(new ngxJumbotronComponentMetadata())
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
    return 'ngx-jumbotron';
  }
});