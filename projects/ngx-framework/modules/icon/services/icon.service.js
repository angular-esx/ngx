import { 
  Class, 
  Inject 
} from '@angular/core';
import { Http } from '@angular/http';

import { DOCUMENT_TOKEN } from '../../../cores';

import { ngxSvgIconConfig } from '../models/svg-icon-config.model';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

var _observable = Observable.Observable;


export var ngxIconService = Class({
  constructor: [
    Http,
    Inject(DOCUMENT_TOKEN),

    function ngxIconService(httpService, document) {
      this._defaultFontSet = '';
      this._iconFontAlias = {};

      this._svgIconConfigs = {};
      this._svgIconSetConfigs = {};
      this._cachedSvgIcons = {};

      this.httpService = httpService;
      this.document = document;
    }
  ],

  setDefaultFontSet: function (className) {
    this._defaultFontSet = className;
    return this;
  },
  getDefaultFontSet: function () {
    return this._defaultFontSet;
  },

  setIconFontAlias: function (alias, className) {
    this._iconFontAlias[alias] = className || alias;
    return this;
  },
  getIconFontClass: function (alias) {
    return this._iconFontAlias[alias] || alias;
  },


  setSvgIcon: function (url, iconName, namespace) {
    this._svgIconConfigs[this.getIconKey(iconName, namespace)] = this.createSvgIconConfig(url);
    return this;
  },
  getSvgIconByUrl: function (url) {
    if(this._cachedSvgIcons.hasOwnProperty(url)){
      return _observable.of(this._cachedSvgIcons[url]);
    }
    
    var _self = this;

    return this.createSvgIconConfig(url)
    .getSvgElement()
    .do(function (svgElement) {
      _self._cachedSvgIcons[url] = svgElement;
    });
  },
  getSvgIconByName: function (iconName, namespace) {
    var _self = this;
    var _iconKey = this.getIconKey(iconName, namespace);
    
    if(this._svgIconConfigs.hasOwnProperty(_iconKey)){
      return this._svgIconConfigs[_iconKey]
      .getSvgElement()
      .do(function (svgElement) {
        _self._cachedSvgIcons[_self._svgIconConfigs[_iconKey].getUrl()] = svgElement;
      });
    }
    
    if (this._svgIconSetConfigs.hasOwnProperty(namespace)) {
      var _svgIconSets = this._svgIconSetConfigs[namespace],
          _svgIconSetsHaveNoElement = [],
          _svgIconSet,
          _svgElement;

      for (var i = 0; i < _svgIconSets.length; i++) {
        _svgIconSet = _svgIconSets[i];

        if(_svgIconSet.hasSvgElement()){
          _svgElement = _svgIconSet.querySvgElement(iconName);
          if(_svgElement){ return _observable.of(_svgElement); }
        }
        else {
          _svgIconSetsHaveNoElement.push(_svgIconSet);
        } 
      }

      var _getSvgElement$ = [];
      for (i = 0; i < _svgIconSetsHaveNoElement.length; i++) {
        _getSvgElement$.push(_svgIconSets[i].getSvgElement(this));
      }

      return _observable.forkJoin(_getSvgElement$)
      .map(function () {
        for (var i = 0; i < _svgIconSetsHaveNoElement.length; i++) {
          _svgIconSet = _svgIconSets[i];
          
          if(_svgIconSet.hasSvgElement()){
            _svgElement = _svgIconSet.querySvgElement(iconName);
            if(_svgElement){ return _svgElement; }
          }
        }
      });
    }
  },

  setSvgIconSet: function (url, namespace) {
    var _namespace = namespace || '';

    if(this._svgIconSetConfigs.hasOwnProperty(_namespace)){
      this._svgIconSetConfigs[_namespace].push(this.createSvgIconConfig(url));
    }
    else{
      this._svgIconSetConfigs[_namespace] = [this.createSvgIconConfig(url)];
    }

    return this;
  },

  getIconKey: function (iconName, namespace) {
    return (namespace || '') + ':' + iconName;
  },

  createSvgIconConfig: function(url) {
    return new ngxSvgIconConfig(url, this.httpService, this.document);
  }
});