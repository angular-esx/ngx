import { 
  Class,
  ElementRef,
  Renderer
} from '@angular/core';
import { ngxUtils } from '../../utils';


var _STYLE_PROPERTIES = {
  COLOR: 'color',
  TYPE: 'type',
  STATE: 'state',
  SIZE: 'size',
  POSITION: 'position'
};
 
export var ngxBaseDirective = Class({
  constructor: [
    ElementRef,
    Renderer,

    function ngxBaseDirective(elementRef, renderer) {
      if (!elementRef) { throw 'elementRef is required'; }
      if (!renderer) { throw 'renderer is required'; }

      this.elementRef = elementRef;
      this.renderer = renderer;
    }
  ],

  ngOnChanges: function (changeRecord) {
    if(this.needRebuildCssClass(changeRecord)){
      this.cssClass = this.buildCssClass(changeRecord);
      this.setCssClass(this.cssClass);
    }
  },

  ngOnInit: function() {
    var _changeRecord = this.initDefaultValues();
    
    if(_changeRecord){ 
      this.ngOnChanges(_changeRecord); 
    }
    else if(ngxUtils.isEmpty(this.cssClass) && this.getPrefixClass()){
      var _cssClasses = [this.getPrefixClass()];
      if(this.initCssClass){ _cssClasses.push(this.initCssClass); }

      this.setCssClass(_cssClasses.join(' '));
     }
  },

  ngDoCheck: function () {},
  ngAfterContentInit: function () {},
  ngAfterContentChecked: function () {},
  ngOnDestroy: function () {},

  initDefaultValues: function(){ return null; },

  getPrefixClass: function () { return ''; },

  getStyleProperties: function(){ return _STYLE_PROPERTIES; },

  buildChangeRecord: function(propertyName, currentValue, previousValue, currentChangeRecord) {
    var _changeRecord = currentChangeRecord || {};
    _changeRecord[propertyName] = {
      previousValue: previousValue,
      currentValue: currentValue
    };

    return _changeRecord;
  },

  needRebuildCssClass: function(changeRecord) {
    var _styleProperties = this.getStyleProperties(),
        _propertyName;

    for (var prop in _styleProperties) {
      _propertyName = _styleProperties[prop];

      if (changeRecord.hasOwnProperty(_propertyName)) { return true; }
    }

    return false;
  },

  buildCssClass: function(changeRecord) {
    var _cssClasses = [],
        _prefixClass = this.getPrefixClass(),
        _styleProperties = this.getStyleProperties(),
        _cssClass;

    if(_prefixClass){ _cssClasses.push(_prefixClass); }

    var _prop;
    Object.keys(_styleProperties).forEach(function(key){
      _prop = _styleProperties[key];
      
      if(changeRecord.hasOwnProperty(_prop)){
        _cssClass = this.buildCssClassForProperty(_prop, changeRecord[_prop].currentValue);
      }
      else {
        _cssClass = this.buildCssClassForProperty(_prop, this[_prop]);
      }

      if(_cssClass){ _cssClasses.push(_cssClass); }
    }, this);

    if(this.initCssClass){ _cssClasses.push(this.initCssClass); }

    return _cssClasses.join(' ');
  },

  setCssClass: function(cssClass){
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'className', cssClass);
  },

  buildCssClassForProperty: function(propertyName, propertyValue) {
    if (ngxUtils.isEmpty(propertyName) || ngxUtils.isEmpty(propertyValue)) { return ''; }

    var _parts = [],
        _prefixClass = this.getPrefixClass(),
        _propertyName = ngxUtils.toHyphenCase(propertyName);

    if(propertyValue.trim().indexOf(' ') > -1){
      var _cssClasses = [];

      propertyValue.split(' ').forEach(function(value) {
        _parts.length = 0;  
        
        if(_prefixClass){ _parts.push(_prefixClass); }
        
        _parts.push(_propertyName);
        _parts.push(value);

        _cssClasses.push(_parts.join('-'));
      });

      return _cssClasses.join(' ');
    }
    else {
      if(_prefixClass){ _parts.push(_prefixClass); }
      _parts.push(_propertyName);
      _parts.push(propertyValue);

      return _parts.join('-');
    }
  },

  propertyHasValue: function(propertyName, value) {
    if(ngxUtils.isEmpty(propertyName) || ngxUtils.isEmpty(value) || ngxUtils.isEmpty(this[propertyName])){ return false; }

    return this[propertyName].indexOf(value) > -1;
  },

  addValueToProperty: function(propertyName, value) {
    if(ngxUtils.isEmpty(propertyName) || ngxUtils.isEmpty(value)) { return; }

    this[propertyName] = ((ngxUtils.isNull(this[propertyName]) ? '' : this[propertyName]) + ' ' + value).trim();
  },

  removeValueFromProperty: function(propertyName, value) {
    if(ngxUtils.isEmpty(propertyName) || ngxUtils.isEmpty(value) || ngxUtils.isEmpty(this[propertyName])) { return; }

    this[propertyName] = this[propertyName].replace(new RegExp(value, 'g'), '').trim();
  }
});