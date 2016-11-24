import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from  '../../cores';

import { ngxIconService } from './services/icon.service';

var _STYLE_PROPERTIES;


export var ngxIconComponentMetadata = Class({
  constructor: function ngxIconComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-icon',
      templateUrl: './templates/icon.html',
      styleUrls: ['./styles/index.scss'],
      inputs: [
        'alt',
        'svgSrc:svg-src',
        'svgIcon:svg-icon',
        'fontSet:font-set',
        'fontIcon:font-icon',
        'prefixClass:prefix-class',
        'initCssClass:class'
      ],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxIconComponent = Component(new ngxIconComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    ngxIconService,

    function ngxIconComponent(elementRef, renderer, ngxIconService) {
      ngxBaseComponent.apply(this, arguments);

      this.ngxIconService = ngxIconService;
    }
  ],

  ngOnChanges: function (changeRecord) {
    var _styleProperties = this.getStyleProperties();

    if(changeRecord.hasOwnProperty(_styleProperties.SVG_SRC) || changeRecord.hasOwnProperty(_styleProperties.SVG_ICON)){
      var _self = this;

      if (changeRecord.hasOwnProperty(_styleProperties.SVG_ICON)) {
        var _parts = this.splitIconKey(this.svgIcon);

        this.ngxIconService.getSvgIconByName(_parts.iconName, _parts.namespace)
        .subscribe(function(svgElement){
          _self.setSvgElement(svgElement);
        });
      } 
      else {
        this.ngxIconService.getSvgIconByUrl(this.svgSrc)
        .subscribe(function(svgElement){
          _self.setSvgElement(svgElement);
        });
      }
    }
    else {
      if(changeRecord.hasOwnProperty(_styleProperties.FONT_SET)){
        this.buildChangeRecord
        (
          _styleProperties.FONT_SET, 
          this.ngxIconService.getIconFontClass(changeRecord[_styleProperties.FONT_SET].currentValue), 
          null, 
          changeRecord
        );
      }

      if(changeRecord.hasOwnProperty(_styleProperties.FONT_ICON)){
        this.buildChangeRecord
        (
          _styleProperties.FONT_ICON, 
          changeRecord[_styleProperties.FONT_ICON].currentValue, 
          null, 
          changeRecord
        );
      }
    }

    ngxBaseComponent.prototype.ngOnChanges.apply(this, [changeRecord]);
  },

  initDefaultValues: function(){
    var _changeRecord;
    if(
      ngxUtils.isEmpty(this.svgSrc) && 
      ngxUtils.isEmpty(this.svgIcon) && 
      ngxUtils.isEmpty(this.fontSet)
    ) {
      var _iconFontClass = this.ngxIconService.getIconFontClass(this.ngxIconService.getDefaultFontSet());
      
      _changeRecord = this.buildChangeRecord(this.getStyleProperties().FONT_SET, _iconFontClass);
    }
    
    return _changeRecord;
  },

  needRebuildCssClass: function(changeRecord){
    var _styleProperties = this.getStyleProperties();

    return changeRecord.hasOwnProperty(_styleProperties.FONT_ICON) || 
    changeRecord.hasOwnProperty(_styleProperties.FONT_SET) || 
    ngxBaseComponent.prototype.needRebuildCssClass.apply(this, arguments);
  },

  buildCssClassForProperty: function(propertyName, propertyValue){
    var _styleProperties = this.getStyleProperties();

    if(propertyName === _styleProperties.FONT_SET || propertyName === _styleProperties.FONT_ICON){
      return propertyValue;
    }
    else{
      return ngxBaseComponent.prototype.buildCssClassForProperty.apply(this, arguments);
    }
  },

  getPrefixClass: function () {
    return 'ngx-icon';
  },

  getStyleProperties: function(){
    if(!_STYLE_PROPERTIES){
      _STYLE_PROPERTIES = Object.assign({
        SVG_SRC: 'svgSrc',
        SVG_ICON: 'svgIcon',
        FONT_SET: 'fontSet',
        FONT_ICON: 'fontIcon'
      }, ngxBaseComponent.prototype.getStyleProperties.apply(this, arguments));
    }

    return _STYLE_PROPERTIES;
  },

  splitIconKey: function (iconKey) {
    if (!iconKey) { return { namespace: '', iconName: '' }; }
    
    var _parts = iconKey.split(':');
    switch (_parts.length) {
      case 1:
        return { namespace: '', iconName: _parts[0] };
      case 2:
        return { namespace: _parts[0], iconName: _parts[1] };
      default:
        throw 'Invalid icon key';
    }
  },

  setSvgElement: function (svgElement) {
    var _nativeElement = this.elementRef.nativeElement;
    
    _nativeElement.innerHTML = '';
    _nativeElement.appendChild(svgElement);
  }
});