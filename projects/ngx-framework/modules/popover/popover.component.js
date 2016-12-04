import { 
  Class, 
  Component,
  ElementRef,
  Renderer,
  Inject,
  ViewChild,
  ViewContainerRef,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';

import { ngxUtils } from  '../../cores';

import { ngxPopoverOption } from './models/popover-option.model';
import { ngxPopoverService } from './services/popover.service';
import { ngxTooltipComponent } from'../tooltip';


export var ngxPopoverComponentMetadata = Class({
  constructor: function ngxPopoverComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-popover',
      templateUrl: './templates/popover.html',
      styleUrls: ['./styles/index.scss'],
      queries: {
        templateElement: new ViewChild('template', { read: ViewContainerRef }),
        titleElement: new ViewChild('title', { read: ViewContainerRef }),
        contentElement: new ViewChild('content', { read: ViewContainerRef })
      },
      animations: [
        trigger('fade', [
          state('active', style({ opacity: 1 })),
          transition('void => active', [
            style({ opacity: 0 }),
            animate('.3s')
          ]),
          transition('active => *', [
            animate('.3s', style({ opacity: 0 }))
          ])
        ])
      ]
    });
  }
});

export var ngxPopoverComponent = Component(new ngxPopoverComponentMetadata())
.Class({
  extends: ngxTooltipComponent,

  constructor: [
    ElementRef,
    Renderer,
    Inject(DOCUMENT),
    ngxPopoverService,
    ngxPopoverOption,

    function ngxPopoverComponent(elementRef, renderer, document, ngxPopoverService, ngxPopoverOption) {
      ngxTooltipComponent.apply(this, arguments);
      
      this.ngxPopoverService = ngxPopoverService;
    }
  ],

  getPrefixClass: function () {
    return 'ngx-popover';
  },

  render: function () {
    if (this.templateRef && !this.templateElement) { throw 'Not found template element of popover'; }
    else if (ngxUtils.isNull(this.templateRef) && ngxUtils.isNull(this.titleElement)) { throw 'Not found title element of popover'; }
    else if (ngxUtils.isNull(this.templateRef) && ngxUtils.isNull(this.contentElement)) { throw 'Not found content element of popover'; }

    if (this.templateRef) {
      this.templateElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.titleElement.element.nativeElement.innerHTML = this.title || '';
      this.contentElement.element.nativeElement.innerHTML = this.content || '';
    }
  }
});