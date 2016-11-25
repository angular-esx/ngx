import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from  '../../cores';

import { ngxCollapseService } from './services/collapse.service';


export var ngxCollapseComponentMetadata = Class({
  constructor: function ngxModalComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-collapse',
      templateUrl: './templates/collapse.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['id', 'state', 'group', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [
        trigger('collapse', [
          state('false', style({ height: '0', overflow: 'hidden' })),
          state('true', style({ height: '*' })),
          transition('0 <=> 1', animate('.25s ease-in'))
        ])
      ]
    });
  }
});

export var ngxCollapseComponent = Component(new ngxCollapseComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    ChangeDetectorRef,
    ngxCollapseService,

    function ngxCollapseComponent(elementRef, renderer, changeDetectorRef, ngxCollapseService) {
      ngxBaseComponent.apply(this, arguments);

      this.changeDetectorRef = changeDetectorRef;
      this.ngxCollapseService = ngxCollapseService;
    }
  ],

  ngOnChanges: function (changeRecord) {
    this.isActive = this.propertyHasValue(this.getStyleProperties().STATE, 'active');
    
    if (this.isActive) {
      ngxBaseComponent.prototype.ngOnChanges.apply(this, [changeRecord]);

      this.changeDetectorRef.markForCheck();
    }
    else {
      this.changeDetectorRef.markForCheck();

      var _self = this;
      setTimeout(function(){
        ngxBaseComponent.prototype.ngOnChanges.apply(_self, [changeRecord]);
      }, this.collapseAwaittimes);
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

  getPrefixClass: function () {
    return 'ngx-collapse';
  },

  initDefaultValues: function(){
    this.collapseAwaittimes = 0.25 * 1000;

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isActive)) {
      this.isActive = false; 
    }
  },

  subscribe: function () {
    var _self = this;

    this.subscription = this.ngxCollapseService.ngxCollapse$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxCollapseService.getActions();

      _events.forEach(function (_event) {
        if (ngxUtils.isEmpty(_event.id) || _self.id === _event.id) {
          if (_event.type === _actions.TOGGLE_COLLAPSE) {
            _self.toggle();
          }
          else if (_event.type === _actions.SHOW_COLLAPSE) {
            _self.show();
          }
          else if (_event.type === _actions.HIDE_COLLAPSE) {
            _self.hide();
          }
        }
        else if (_event.id && _event.group && _event.id !== _self.id && _event.group === _self.group) {
          _self.hide();
        }
      });
    });
  },

  toggle: function () {
    if (this.isActive) {
      if (this.group) {
        this.ngxCollapseService.hide(this.id, this.group);
      }
      else {
        this.hide();
      }
    }
    else {
      if (this.group) {
        this.ngxCollapseService.show(this.id, this.group);
      }
      else {
        this.show();
      }
    }
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
  }
});