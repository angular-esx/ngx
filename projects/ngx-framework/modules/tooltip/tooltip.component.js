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

import { ngxBaseComponent, ngxUtils } from  '../../cores';

import { ngxTooltipPositionHelper } from './models/tooltip-position-helper.model';
import { ngxTooltipOption } from './models/tooltip-option.model';
import { ngxTooltipService } from './services/tooltip.service';


export var ngxTooltipComponentMetadata = Class({
  constructor: function ngxTooltipComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-tooltip',
      templateUrl: './templates/tooltip.html',
      styleUrls: ['./styles/index.scss'],
      queries: {
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

export var ngxTooltipComponent = Component(new ngxTooltipComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    Inject(DOCUMENT),
    ngxTooltipService,
    ngxTooltipOption,

    function ngxTooltipComponent(elementRef, renderer, document, ngxTooltipService, ngxTooltipOption) {
      ngxBaseComponent.apply(this, [elementRef, renderer, ngxTooltipService]);
      
      this.ngxTooltipService = ngxTooltipService;
      this.initPositionHelper(document);
      ngxTooltipOption.assign(this);
    }
  ],

  ngAfterViewInit: function () {
    this.fadeOutAwaitTimes = 0.25 * 1000;

    this.render();

    var _rect = this.getRect();
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'top', (_rect.top !== 0 && !_rect.top ? -1000 : _rect.top) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'left', (_rect.left !== 0 && !_rect.left ? -1000 : _rect.left) + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', _rect.width + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', _rect.height + 'px');

    var _styleProperties = this.getStyleProperties();
    var _changeRecord = this.buildChangeRecord(_styleProperties.STATE, this.state);
    this.buildChangeRecord(_styleProperties.POSITION, this.position, null, _changeRecord);

    this.ngOnChanges(_changeRecord);

    ngxBaseComponent.prototype.ngAfterViewInit.apply(this);
  },

  getPrefixClass: function () {
    return 'ngx-tooltip';
  },

  render: function () {
    if (ngxUtils.isNull(this.contentElement)) { throw 'Not found content element of tooltip'; }

    if (this.templateRef) {
      this.contentElement.createEmbeddedView(this.templateRef, 0);
    }
    else {
      this.contentElement.element.nativeElement.innerHTML = this.content;
    }
  },

  getRect: function () {
    var _positions = this.position.split(' ');
    if (_positions.length === 1) { _positions[1] = 'center'; }
    
    var _hostElementRect = this.positionHelper.getRect(this.hostElement.nativeElement),
        _elementRect = this.positionHelper.getRect(this.elementRef.nativeElement);
    
    var _rect;
    switch (_positions[0]) {
      case 'right':
        _rect = {
          top: this.positionHelper.shiftHeight(_hostElementRect, _elementRect, _positions[1]),
          left: this.positionHelper.shiftWidth(_hostElementRect, _elementRect, _positions[0])
        };
        break;
      case 'left':
        _rect = {
          top: this.positionHelper.shiftHeight(_hostElementRect, _elementRect, _positions[1]),
          left: _hostElementRect.left - _elementRect.width
        };
        break;
      case 'bottom':
        _rect = {
          top: this.positionHelper.shiftHeight(_hostElementRect, _elementRect, _positions[0]),
          left: this.positionHelper.shiftWidth(_hostElementRect, _elementRect, _positions[1])
        };
        break;
      default:
        _rect = {
          top: _hostElementRect.top - _elementRect.height,
          left: this.positionHelper.shiftWidth(_hostElementRect, _elementRect, _positions[1])
        };
    }

    _rect.width = _elementRect.width;
    _rect.height = _elementRect.height;

    return _rect;
  },

  initPositionHelper: function(document) { 
    this.positionHelper = new ngxTooltipPositionHelper(document); 
  },

  destroy: function(){
    var _self = this;

    return new Promise(function(resolve){
      _self.state = '';
      setTimeout(resolve, _self.fadeOutAwaitTimes);
    });
  }
});