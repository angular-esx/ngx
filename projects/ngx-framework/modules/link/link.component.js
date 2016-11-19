import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from '../../cores';


export var ngxLinkComponentMetadata = Class({
  constructor: function ngxLinkComponentMetadata(){
    Object.assign(this, {
      selector: 'a[ngx-link]',
      templateUrl: './templates/link.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['color', 'size', 'state', 'initCssClass:class'],
      outputs: ['clickEmitter:onClick'],
      host: {
        '(click)': 'click($event)'
      },
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxLinkComponent = Component(new ngxLinkComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ngxLinkComponent(elementRef, renderer) {
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

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isDisabled)){ this.isDisabled = false; }

    if(ngxUtils.isEmpty(this.color)){ 
      this.color = 'primary';
      _changeRecord = this.buildChangeRecord(_styleProperties.COLOR, this.color);
     }

    if (ngxUtils.isEmpty(this.size)) {
      this.size = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.SIZE, this.size);
     }

     return _changeRecord;
  },

  getPrefixClass: function () {
    return 'ngx-link';
  },

  click: function (event) {
    if (this.isDisabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    else {
      this.clickEmitter.emit(event);
    }
  }
});