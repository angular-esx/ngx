import {
  Class,
  Component,
  ElementRef,
  Renderer,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from  '../../cores';


export var ngxItemComponentMetadata = Class({
  constructor: function ngxItemComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-item, a[ngx-item]',
      templateUrl: './templates/item.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['color', 'state', 'initCssClass:class'],
      outputs: ['clickEmitter:onClick'],
      host: {
        '(click)': 'click($event)'
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxItemComponent = Component(new ngxItemComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ngxItemComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);

      this.clickEmitter = new EventEmitter();
    }
  ],

  ngOnChanges: function(changeRecord){
    this.isDisabled = this.propertyHasValue(this.getStyleProperties().STATE, 'disabled');

    ngxBaseComponent.prototype.ngOnChanges.apply(this, arguments);
  },

  initDefaultValues: function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isDisabled)){ 
      this.isDisabled = false; 
    }

    if(ngxUtils.isEmpty(this.color)){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    return _changeRecord;
  },

  click: function (event) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  },

  getPrefixClass: function () {
    return 'ngx-item';
  }
});