import { Class } from '@angular/core';

import { ngxUtils } from '../../../cores';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/share';

var _Observable = Observable.Observable;


export var ngxSvgIconConfig = Class({
  constructor: function(url, httpService, document){
    this._fetchingSvgIcons = {};
    this._svgElement = null;
    this._url = url;

    this.httpService = httpService;
    this.document = document;
  },

  getUrl: function() { return this._url; },

  hasSvgElement: function() { return !ngxUtils.isNull(this._svgElement); },

  querySvgElement: function(id) {
    var _result = (this._svgElement && id) ? this._svgElement.querySelector('#' + id) : null;
    if(!_result){ return null; }

    if (_result.tagName.toLowerCase() === 'svg') {
      return this.setAttributes(_result.cloneNode(true));
    }

    _result = this.toSvgElement('<svg></svg>').appendChild(_result.cloneNode(true));
    return this.setAttributes(_result);
  },

  getSvgElement: function() {
    if(this._svgElement){ 
      return _Observable.of(this._svgElement.cloneNode(true)); 
    }

    var _self = this;

    return this.fetch(this._url)
    .map(function (svgStr) {
      _self._svgElement = _self.toSvgElement(svgStr);
      if(!_self._svgElement){ return null; }

      return _self.setAttributes(_self._svgElement).cloneNode(true);
    });
  },

  toSvgElement: function(svgStr) {
    var _div = this.document.createElement('div');
    _div.innerHTML = svgStr;

    return _div.querySelector('svg');
  },

  setAttributes: function(svgElement) {
    if (!svgElement.getAttribute('xmlns')) {
      svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    svgElement.setAttribute('fit', '');
    svgElement.setAttribute('height', '100%');
    svgElement.setAttribute('width', '100%');
    svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svgElement.setAttribute('focusable', 'false');

    return svgElement;
  },

  fetch: function (url) {
    if (this._fetchingSvgIcons.hasOwnProperty(url)) {
      return this._fetchingSvgIcons[url];
    }

    var _self = this;

    var _request = this.httpService.get(url)
    .map(function (response) {
      return response.text();
    })
    .finally(function () {
      delete _self._fetchingSvgIcons[url];
    })
    .share();

    this._fetchingSvgIcons[url] = _request;

    return _request;
  }
});