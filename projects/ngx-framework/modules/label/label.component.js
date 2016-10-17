import { 
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} 
from '@angular/core';

import { ngxBaseComponent, ngxUtils } from '../../cores';


export var ngxLabelComponent = Component({
  selector: 'ngx-label',
  templateUrl: './templates/label.html',
  styleUrls: ['./styles/label.scss'],
  inputs: ['color', 'type', 'initCssClass:class'],
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