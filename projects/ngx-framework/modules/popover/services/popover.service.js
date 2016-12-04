import { Class } from '@angular/core';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';

var _observable = Observable.Observable;

var _ACTIONS = {
  ENABLE_POPOVER: 'ENABLE_POPOVER',
  TOGGLE_POPOVER: 'TOGGLE_POPOVER'
};

export var ngxPopoverService = Class({
  constructor: function ngxPopoverService() {
    var _self = this;

    this.ngxPopover$ = new _observable(function (observer) {
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

  getEnable$: function (popoverId, isEnabled) {
    return _observable.from([{ id: popoverId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER }]);
  },
  enable: function (popoverId, isEnabled) {
    this.next({ id: popoverId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_POPOVER });
  },

  getToggle$: function (popoverId, delay) {
    return _observable.from([{ id: popoverId, type: _ACTIONS.TOGGLE_POPOVER, delay: delay }]);
  },
  toggle: function (popoverId, delay) {
    this.next({ id: popoverId, type: _ACTIONS.TOGGLE_POPOVER, delay: delay });
  },

  cacheTemplateRef: function (id, template) {
    if (id && template) { this._templates[id] = template; }
    return this;
  },
  getTemplateRef: function (id) {
    return this._templates[id];
  }
});