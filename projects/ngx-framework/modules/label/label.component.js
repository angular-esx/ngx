import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseComponent, ngxUtils } from '../../cores';


export var ngxLabelComponentMetadata = Class({
  constructor: function ngxLabelComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-label',
      templateUrl: './templates/label.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['color', 'type', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxLabelComponent = Component(new ngxLabelComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ngxLabelComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  initDefaultValues: function() {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.color)) {
      this.color = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

     return _changeRecord;
  },

  getPrefixClass: function(){
    return 'ngx-label';
  }
});