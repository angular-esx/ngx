import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { 
  DOCUMENT_TOKEN,
  ngxBaseComponent, 
  ngxUtils 
} from  '../../cores';

import { ngxModalService } from './services/modal.service';

var _STYLE_PROPERTIES;


export var ngxModalComponentMetadata = Class({
  constructor: function ngxModalComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-modal',
      templateUrl: './templates/modal.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['id', 'type', 'size', 'backdrop', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        '(click)': 'click($event)'
      },
      animations: [
        trigger('fade', [
          state('false', style({ opacity: 0, transform: 'translateY(-100px)' })),
          state('true', style({ opacity: 1, transform: 'translateY(0)' })),
          transition('0 <=> 1', animate('.25s ease-in'))
        ])
      ]
    });
  }
});

export var ngxModalComponent = Component(new ngxModalComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    ChangeDetectorRef,
    ngxModalService,
    Inject(DOCUMENT_TOKEN),

    function ngxModalComponent(elementRef, renderer, changeDetectorRef, ngxModalService, document) {
      ngxBaseComponent.apply(this, arguments);

      this.changeDetectorRef = changeDetectorRef;
      this.ngxModalService = ngxModalService;
      this.document = document;
    }
  ],

  ngOnChanges: function (changeRecord) {
    if (ngxUtils.isEmpty(this.id)) { throw 'Must provide id to ngxModal'; }

    var _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');

    if (ngxUtils.isNull(this.state)) {
      ngxBaseComponent.prototype.ngOnChanges.apply(this, [changeRecord]);
      return;
    }

    var _classes = this.document.body.className.split(' ');
    
    if (this.isActive) {
      ngxBaseComponent.prototype.ngOnChanges.apply(this, [changeRecord]);
  
      _classes.push(this.buildCssClassForProperty(_styleProperties.STATE, this.state));

      this.renderer.setElementProperty(this.document.body, 'className', _classes.join(' ').trim());

      this.changeDetectorRef.markForCheck();
    }
    else {
      var _self = this;
      var _stateClass = this.buildCssClassForProperty(_styleProperties.STATE, 'active');
      
      _classes = _classes.filter(function(cssClass){
        return cssClass !== _stateClass;
      });

      setTimeout(function() {
        ngxBaseComponent.prototype.ngOnChanges.apply(_self, [changeRecord]);

        _self.renderer.setElementProperty(_self.document.body, 'className', _classes.join(' ').trim());

        _self.changeDetectorRef.markForCheck();
      }, this.fadeOutAwaittimes);
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

  initDefaultValues: function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    this.fadeOutAwaittimes = 0.25 * 1000;

    if (ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isActive)) {
      this.isActive = false;
    }

    if (ngxUtils.isEmpty(this.backdrop)) {
      this.backdrop = true;
      _changeRecord = this.buildChangeRecord(_styleProperties.BACKDROP, this.backdrop);
    }

    if (ngxUtils.isEmpty(this.size)) {
      this.size = 'default';
      _changeRecord = Object.assign(_changeRecord || {}, this.buildChangeRecord(_styleProperties.SIZE, this.size));
    }
    
    return _changeRecord;
  },

  getPrefixClass: function () {
    return 'ngx-modal';
  },

  getStyleProperties: function() {
    if(!_STYLE_PROPERTIES) {
      _STYLE_PROPERTIES = Object.assign({
        BACKDROP: 'backdrop'
      }, ngxBaseComponent.prototype.getStyleProperties.apply(this, arguments));
    }

    return _STYLE_PROPERTIES;
  },

  buildCssClassForProperty: function(propertyName, propertyValue) {
    if(propertyName === 'backdrop' && !ngxUtils.isEmpty(this.backdrop) && propertyValue.toString() === 'true') {
      return [this.getPrefixClass(), propertyName].join('-');
    }

    return ngxBaseComponent.prototype.buildCssClassForProperty.apply(this, arguments);
  },

  subscribe: function () {
    var _self = this;

    this.subscription = this.ngxModalService.ngxModal$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxModalService.getActions();

      _events.forEach(function (_event) {
        if (!ngxUtils.isEmpty(_event.id) && _event.id === _self.id) {
          if (_event.type === _actions.SHOW_MODAL) {
            _self.show();
          }
          else if (_event.type === _actions.HIDE_MODAL) {
            _self.hide();
          }
        }
      });
    });
  },

  show: function () {
    if (this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.addValueToProperty(_styleProperties.STATE, 'active');

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  },

  hide: function () {
    if (!this.isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  },

  click: function (event) {
    if
    (
        !ngxUtils.isEmpty(this.id) && this.id == event.target.id &&
        this.isActive &&
        !this.propertyHasValue(this.getStyleProperties().TYPE, 'static')
    ) {
      this.hide();
    }
  }
});