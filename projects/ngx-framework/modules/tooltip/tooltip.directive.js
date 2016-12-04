import { 
  Class, 
  Directive,
  ElementRef,
  Renderer,
  ReflectiveInjector,
  ViewContainerRef,
  ComponentFactoryResolver,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseDirective, ngxUtils } from  '../../cores';

import { ngxTooltipOption } from './models/tooltip-option.model.js';
import { ngxTooltipComponent } from './tooltip.component.js';
import { ngxTooltipService } from './services/tooltip.service';


export var ngxTooltipDirectiveMetadata = Class({
  constructor: function ngxTooltipDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-tooltip]',
      inputs: [
        'id',
        'content: ngx-tooltip',
        'state: ngx-tooltip-state',
        'position: ngx-tooltip-position',
        'template: ngx-tooltip-template',
        'delay: ngx-tooltip-delay',
        'autoHide: ngx-tooltip-auto-hide',
        'initCssClass:class'
      ],
      host: {
        '(focusin)': 'show()',
        '(mouseenter)': 'show()',
        '(focusout)': 'hide()',
        '(mouseleave)': 'hide()'
      },
      ChangeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxTooltipDirective = Directive(new ngxTooltipDirectiveMetadata())
.Class({
  extends: ngxBaseDirective,

  constructor: [
    ElementRef,
    Renderer,
    ViewContainerRef,
    ComponentFactoryResolver,
    ngxTooltipService,

    function ngxTooltipDirective(elementRef, renderer, viewContainerRef, componentLoader, ngxTooltipService) {
      ngxBaseDirective.apply(this, [elementRef, renderer]);
      
      this.ngxTooltipService = ngxTooltipService;
      this.viewContainerRef = viewContainerRef;
      this.componentLoader = componentLoader;
    }
  ],

  ngOnChanges: function(changeRecord){
    var _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');
    
    ngxBaseDirective.prototype.ngOnChanges.apply(this, arguments);
  },

  ngOnInit: function () {
    this.subscribe();

    ngxBaseDirective.prototype.ngOnInit.apply(this);
  },

  ngOnDestroy: function () {
    if (this.subscription) { this.subscription.unsubscribe(); }
    if (this.componentRef){ this.componentRef.destroy(); }

    ngxBaseDirective.prototype.ngOnDestroy.apply(this);
  },

  getPrefixClass: function () {
    return 'ngx-tooltip';
  },

  initDefaultValues: function(){
    if (this.autoHide === 'true') { this.autoHide = true; }
    else if (this.autoHide === 'false') { this.autoHide = false; }

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isActive)){ this.isActive = false; }

    if(ngxUtils.isEmpty(this.state) && ngxUtils.isNull(this.isDisabled)){ this.isDisabled = false; }
  },

  subscribe: function () {
    var _self = this;
    this.subscription = this.ngxTooltipService.ngxTooltip$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxTooltipService.getActions();
      
      _events.forEach(function (_event) {
        if (ngxUtils.isEmpty(_event.id) || _event.id === _self.id) {
          if (_event.type === _actions.ENABLE_TOOLTIP) {
            _self.enable(_event.isEnabled);
          }
          else if (_event.type === _actions.SHOW_TOOLTIP) {
            _self.show({
              delay: _event.delay,
              autoHide: false
            });
          }
          else if (_event.type === _actions.HIDE_TOOLTIP) {
            _self.hide({ autoHide: true });
          }
        }
      });
    });
  },

  enable: function (isEnabled) {
    var _styleProperties = this.getStyleProperties();

    if (isEnabled && this.state && this.isDisabled) {
      this.removeValueFromProperty(_styleProperties.STATE, 'disabled');
    }
    else if (!isEnabled && !this.isDisabled) {
      this.addValueToProperty(_styleProperties.STATE, 'disabled');
    }

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  },

  show: function (options) {
    if 
    (
      (!this.content && !this.template) ||
      this.isActive ||
      this.isDisabled
    ) { return; }

    if(this.componentRef){
      this.componentRef.destroy();
      this.componentRef = null;
    }
    
    if (options) {
      this.delay = ngxUtils.isNull(options.delay) ? this.delay : options.delay;
      this.autoHide = ngxUtils.isNull(options.autoHide) ? this.autoHide : options.autoHide;
    }

    var _styleProperties = this.getStyleProperties();
    this.addValueToProperty(_styleProperties.STATE, 'active');
    
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));

    this.loadComponentRef();
  },

  hide: function (options) {
    if 
    (
      !this.isActive ||
      (!options && this.autoHide === false) ||
      (options && !options.autoHide) ||
      !this.componentRef
    ) { return; }

    var _self = this,
        _componentRef = this.componentRef,
        _styleProperties = this.getStyleProperties();

    this.removeValueFromProperty(_styleProperties.STATE, 'active');
   
    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));

    _componentRef.instance.destroy()
    .then(function(){
      if( _self.componentRef === _componentRef){
        _self.componentRef.destroy();
        _self.componentRef = null;
      }
      else {
        _componentRef.destroy();
        _componentRef = null;
      }
    });
  },

  loadComponentRef: function () {
    var _options = new ngxTooltipOption({
      hostElement: this.viewContainerRef.element,
      templateRef: this.ngxTooltipService.getTemplateRef(this.template),
      content: this.content,
      state: this.state,
      position: this.position || 'top',
      delay: this.delay,
      autoHide: this.autoHide
    });

    var _providers = ReflectiveInjector.resolve([
      { provide: ngxTooltipService, useValue: this.ngxTooltipService },
      { provide: ngxTooltipOption, useValue: _options }
    ]);

    this.componentRef = this.viewContainerRef.createComponent
    (
      this.componentLoader.resolveComponentFactory(ngxTooltipComponent),
      this.viewContainerRef.length,
      ReflectiveInjector.fromResolvedProviders(_providers, this.viewContainerRef.parentInjector)
    );
  }
});