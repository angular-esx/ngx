import { Class } from '@angular/core';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';

var _observable = Observable.Observable;

var _ACTIONS = {
  ENABLE_TOOLTIP: 'ENABLE_TOOLTIP',
  SHOW_TOOLTIP: 'SHOW_TOOLTIP',
  HIDE_TOOLTIP: 'HIDE_TOOLTIP',
};

export var ngxTooltipService = Class({
  constructor: function ngxTooltipService() {
    var _self = this;

    this.ngxTooltip$ = new _observable(function (observer) {
      _self.observer = observer;
    })
    .share();

    this._templates = [];
  },

  getActions: function () {
    return Object.assign({}, _ACTIONS);
  },

  next: function (event) {
    if (this.observer) { this.observer.next(event); }
  },

  getEnable$: function (tooltipId, isEnabled) {
    return _observable.from([{ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP }]);
  },
  enable: function (tooltipId, isEnabled) {
    this.next({ id: tooltipId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TOOLTIP });
  },

  getShow$: function (tooltipId, delay) {
    return _observable.from([{ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay }]);
  },
  show: function (tooltipId, delay) {
    this.next({ id: tooltipId, type: _ACTIONS.SHOW_TOOLTIP, delay: delay });
  },

  getHide$: function (tooltipId) {
    return _observable.from([{ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP }]);
  },
  hide: function (tooltipId) {
    this.next({ id: tooltipId, type: _ACTIONS.HIDE_TOOLTIP });
  },

  cacheTemplateRef: function (id, template) {
    if (id && template) { this._templates[id] = template; }
    return this;
  },
  getTemplateRef: function (id) {
    return this._templates[id];
  }
});