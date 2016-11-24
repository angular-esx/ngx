import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from  '../../cores';

var _STYLE_PROPERTIES;


export var ngxProgressComponentMetadata = Class({
  constructor: function ngxPaginationComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-progress',
      templateUrl: './templates/progress.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['color', 'value', 'max', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        '[class.ngx-progress]': 'true'
      }
    });
  }
});

export var ngxProgressComponent = Component(new ngxProgressComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    ChangeDetectorRef,

    function ngxProgressComponent(elementRef, renderer, changeDetectorRef) {
      ngxBaseComponent.apply(this, arguments);
      
      this.changeDetectorRef = changeDetectorRef;
    }
  ],

  ngOnChanges: function (changeRecord) {
    var _self = this;
    setTimeout(function () {
      _self.currentProgress = (_self.value / _self.max) * 100;

      _self.changeDetectorRef.markForCheck();
    });

    ngxBaseComponent.prototype.ngOnChanges.apply(this, arguments);
  },

  initDefaultValues: function(){
    var _styleProperties = this.getStyleProperties();
    var _changeRecord;

    this.currentProgress = 0;

    if(ngxUtils.isEmpty(this.value)){ 
      this.value = 0;
      _changeRecord = this.buildChangeRecord(_styleProperties.VALUE, this.value);
     }

    if(ngxUtils.isEmpty(this.max)){ 
      this.max = 100;
      _changeRecord = Object.assign(_changeRecord || {}, this.buildChangeRecord(_styleProperties.MAX, this.max));
     }
    
    return _changeRecord;
  },

  getPrefixClass: function () {
    return 'ngx-progress';
  },

   getStyleProperties: function() {
    if(!_STYLE_PROPERTIES) {
      _STYLE_PROPERTIES = Object.assign({
        VALUE: 'value',
        MAX: 'max'
      }, ngxBaseComponent.prototype.getStyleProperties.apply(this, arguments));
    }

    return _STYLE_PROPERTIES;
  }
});