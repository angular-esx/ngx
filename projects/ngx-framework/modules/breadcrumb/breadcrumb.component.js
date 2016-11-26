import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent } from  '../../cores';


export var ngxBreadcrumbComponentMetadata = Class({
  constructor: function ngxBreadcrumbComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-breadcrumb',
      templateUrl: './templates/breadcrumb.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['color', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxBreadcrumbComponent = Component(new ngxBreadcrumbComponentMetadata())
.Class({
  extends: ngxBaseComponent,
  
  constructor: [
    ElementRef,
    Renderer,

    function ngxBreadcrumbComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],
  
  getPrefixClass: function () {
    return 'ngx-breadcrumb';
  }
});