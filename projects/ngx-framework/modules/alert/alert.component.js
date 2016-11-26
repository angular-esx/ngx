import {
  Class,
  Component,
  ElementRef,
  Renderer,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from  '../../cores';

import { ngxAlertService } from './services/alert.service';


export var ngxAlertComponentMetadata = Class({
  constructor: function ngxAlertComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-alert',
      templateUrl: './templates/alert.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['id', 'color', 'type', 'state', 'position', 'initCssClass:class'],
      outputs: [
        'showingEmitter: onShowing',
        'shownEmitter: onShown',
        'dismissingEmitter: onDismissing',
        'dismissedEmitter: onDismissed'
      ],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [
        trigger('fade', [
          state('false', style({ opacity: 1 })),
          state('true', style({ opacity: 0 })),
          transition('0 <=> 1', animate('.5s ease-in'))
        ])
      ]
    });
  }
});

export var ngxAlertComponent = Component(new ngxAlertComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    ChangeDetectorRef,
    ngxAlertService,

    function ngxAlertComponent(elementRef, renderer, changeDetectorRef, ngxAlertService) {
      ngxBaseComponent.apply(this, arguments);
      
      this.fadeOutAwaitTimes = 0.5 * 1000;
      this.changeDetectorRef = changeDetectorRef;
      this.ngxAlertService = ngxAlertService;

      this.showingEmitter = new EventEmitter(false);
      this.shownEmitter = new EventEmitter();

      this.dismissingEmitter = new EventEmitter(false);
      this.dismissedEmitter = new EventEmitter();
    }
  ],

  ngOnChanges: function(changeRecord){
    var _self = this,
        _styleProperties = this.getStyleProperties(),
        _previousIsHidden = this.isHidden;

    this.isHidden = this.propertyHasValue(_styleProperties.STATE, 'hidden');
    this.isDismissible = this.propertyHasValue(_styleProperties.TYPE, 'dismissible');

    if
    (
      ngxUtils.isNull(_previousIsHidden) ||
      !changeRecord.hasOwnProperty(_styleProperties.STATE)
    ){
      ngxBaseComponent.prototype.ngOnChanges.apply(this, [changeRecord]);
      return;
    }

    if (this.isHidden) {
      this.changeDetectorRef.markForCheck();

      setTimeout(function(){
        ngxBaseComponent.prototype.ngOnChanges.apply(_self, [changeRecord]);

        _self.dismissedEmitter.emit({
          id: _self.id
        });
      }, this.fadeOutAwaitTimes);
    }
    else {
      ngxBaseComponent.prototype.ngOnChanges.apply(this, [changeRecord]);

      this.shownEmitter.emit({
        id: _self.id
      });

      this.changeDetectorRef.markForCheck();
    }
  },

  ngOnInit: function () {
    this.subscribe();

    ngxBaseComponent.prototype.ngOnInit.apply(this);
  },

  ngOnDestroy: function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    ngxBaseComponent.prototype.ngOnDestroy.apply(this);
  },


  initDefaultValues: function(){
    if(ngxUtils.isEmpty(this.type) && ngxUtils.isNull(this.isDismissible)){ 
      this.isDismissible = false; 
    }

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isHidden)){ 
      this.isHidden = false; 
    }
  },

  getPrefixClass: function(){
    return 'ngx-alert';
  },
  
  subscribe: function () {
    var _self = this;

    this.subscription = this.ngxAlertService.ngxAlert$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }
      
      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxAlertService.getActions();
      
      _events.forEach(function (_event) {
        if (ngxUtils.isEmpty(_event.id) || _event.id === _self.id) {
          if (_event.type === _actions.SHOW_ALERT) {
            _self.show();
          }
          else if (_event.type === _actions.DISMISS_ALERT) {
            _self.dismiss();
          }
        }
      });
    });
  },

  show: function () {
    if (!this.isHidden) { return; }

    var _isCanceled = false;
    this.showingEmitter.emit({
      id: this.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    var _styleProperties = this.getStyleProperties();
    this.removeValueFromProperty(_styleProperties.STATE, 'hidden');
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  },

  dismiss: function () {
    if (this.isHidden) { return; }
    
    var _isCanceled = false;
    this.dismissingEmitter.emit({
      id: this.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }
    
    var _styleProperties = this.getStyleProperties();
    this.addValueToProperty(_styleProperties.STATE, 'hidden');
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  }
});