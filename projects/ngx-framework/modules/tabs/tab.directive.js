import { 
  Class, 
  Directive,
  ElementRef,
  Renderer,
  ContentChild,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseDirective, ngxUtils } from  '../../cores';

import { ngxTabsService } from './services/tabs.service';
import { ngxTabHeaderDirective } from './tab-header.directive';
import { ngxTabContentDirective } from './tab-content.directive';


export var ngxTabDirectiveMetadata = Class({
  constructor: function ngxTabDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-tab',
      inputs: ['id', 'state', 'initCssClass:class'],
      changeDetection: ChangeDetectionStrategy.OnPush,
      queries: {
        headerTemplate: new ContentChild(ngxTabHeaderDirective),
        contentTemplate: new ContentChild(ngxTabContentDirective)
      }
    });
  }
});

export var ngxTabDirective = Directive(new ngxTabDirectiveMetadata())
.Class({
  extends: ngxBaseDirective,

  constructor: [
    ElementRef,
    Renderer,
    ngxTabsService,

    function ngxTabDirective(elementRef, renderer, ngxTabsService) {
      ngxBaseDirective.apply(this, arguments);

      this.ngxTabsService = ngxTabsService;
    }
  ],

  ngOnChanges: function (changeRecord) {
    var _styleProperties = this.getStyleProperties();

    this.isActive = this.propertyHasValue(_styleProperties.STATE, 'active');
    this.isDisabled = this.propertyHasValue(_styleProperties.STATE, 'disabled');
    
    ngxBaseDirective.prototype.ngOnChanges.apply(this, [changeRecord]);
  },

  ngAfterContentInit: function () {
    if (ngxUtils.isEmpty(this.id)) { this.id = ngxUtils.newGUID(); }

    if (ngxUtils.isNull(this.headerTemplate)) {
      throw 'Header is required for tab';
    }
    if (ngxUtils.isNull(this.contentTemplate)) {
      throw 'Content is required for tab';
    }

    ngxBaseDirective.prototype.ngAfterContentInit.apply(this);
  },

  getPrefixClass: function () {
    return 'ngx-tab';
  },

  activate: function (isActive) {
    if (this.isActive === isActive) { return; }

    var _styleProperties = this.getStyleProperties();

    if(isActive){
      this.addValueToProperty(_styleProperties.STATE, 'active');
    }
    else{
      this.removeValueFromProperty(_styleProperties.STATE, 'active');
    }

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  },

  enable: function (isEnabled) {
    if (this.isDisabled !== isEnabled) { return; }

    var _styleProperties = this.getStyleProperties();

    if(isEnabled){
      this.addValueToProperty(_styleProperties.STATE, 'disabled');
    }
    else{
      this.removeValueFromProperty(_styleProperties.STATE, 'disabled');
    }

    this.ngOnChanges(this.buildChangeRecord(_styleProperties.STATE, this.state));
  }
});