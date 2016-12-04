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

import { ngxUtils } from  '../../cores';

import { ngxTooltipDirective } from '../tooltip';

import { ngxPopoverOption } from './models/popover-option.model';
import { ngxPopoverComponent } from './popover.component';
import { ngxPopoverService } from './services/popover.service';


export var ngxPopoverDirectiveMetadata = Class({
  constructor: function ngxPopoverDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-popover]',
      inputs: [
        'id',
        'title: ngx-popover-title',
        'content: ngx-popover-content',
        'state: ngx-popover-state',
        'position: ngx-popover-position',
        'template: ngx-popover-template',
        'delay: ngx-popover-delay',
        'initCssClass:class'
      ],
      host: {
        '(click)': 'toggle()'
      },
      ChangeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxPopoverDirective = Directive(new ngxPopoverDirectiveMetadata())
.Class({
  extends: ngxTooltipDirective,

  constructor: [
    ElementRef,
    Renderer,
    ViewContainerRef,
    ComponentFactoryResolver,
    ngxPopoverService,

    function ngxPopoverDirective(elementRef, renderer, viewContainerRef, componentLoader, ngxPopoverService) {
      ngxTooltipDirective.apply(this, arguments);

      this.ngxPopoverService = ngxPopoverService;
    }
  ],

  getPrefixClass: function () {
    return 'ngx-popover';
  },

  subscribe: function () {
    var _self = this;
    this.subscription = this.ngxPopoverService.ngxPopover$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxPopoverService.getActions();

      _events.forEach(function (_event) {
        if (!_event.id || _event.id === _self.id) {
          if (_event.type === _actions.ENABLE_POPOVER) {
            _self.enable(_event.isEnabled);
          }
          else if (_event.type === _actions.TOGGLE_POPOVER) {
            _self.toggle({
              delay: _event.delay
            });
          }
        }
      });
    });
  },

  toggle: function (options) {
    if (this.isActive) {
      if (options) { options.autoHide = true; }
      this.hide(options);
    }
    else {
      if (this.title || this.content || this.template) {
        if (options) { options.autoHide = false; }
        this.show(options);
      }
    }
  },

  loadComponentRef: function () {
    var _options = new ngxPopoverOption({
      hostElement: this.viewContainerRef.element,
      templateRef: this.ngxPopoverService.getTemplateRef(this.template),
      title: this.title,
      content: this.content,
      state: this.state,
      position: this.position || 'top',
      delay: this.delay
    });
    
    var _providers = ReflectiveInjector.resolve([
      { provide: ngxPopoverService, useValue: this.ngxPopoverService },
      { provide: ngxPopoverOption, useValue: _options }
    ]);

    this.componentRef = this.viewContainerRef.createComponent
    (
      this.componentLoader.resolveComponentFactory(ngxPopoverComponent),
      this.viewContainerRef.length,
      ReflectiveInjector.fromResolvedProviders(_providers, this.viewContainerRef.parentInjector)
    );
  }
});