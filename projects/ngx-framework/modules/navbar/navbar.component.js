import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseComponent, ngxUtils } from '../../cores';


export var ngxNavbarComponentMetadata = Class({
  constructor: function ngxNavbarComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-navbar',
      templateUrl: './templates/navbar.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['color', 'position', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxNavbarComponent = Component(new ngxNavbarComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ngxNavbarComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  initDefaultValues: function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
    }

    return _changeRecord;
  },

  getPrefixClass: function () {
    return 'ngx-navbar';
  }
});