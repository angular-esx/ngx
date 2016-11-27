import { Class } from '@angular/core';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';

var _observable = Observable.Observable;

var _ACTIONS = {
  ENABLE_TAB: 'ENABLE_TAB',
  SELECT_TAB: 'SELECT_TAB'
};


export var ngxTabsService = Class({
  constructor: function ngxTabsService() {
    var _self = this;

    this.ngxTabs$ = new _observable(function (observer) {
      _self.observer = observer;
    })
    .share();
  },

  getActions: function () {
    return Object.assign({}, _ACTIONS);
  },

  next: function (event) {
    if (this.observer) { this.observer.next(event); }
  },

  getEnable$: function (tabId, isEnabled) {
    return _observable.from([{ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB }]);
  },
  enable: function (tabId, isEnabled) {
    this.next({ id: tabId, isEnabled: isEnabled, type: _ACTIONS.ENABLE_TAB });
  },

  getSelect$: function (tabIdmodalId) {
    return _observable.from([{ id: tabId, type: _ACTIONS.SELECT_TAB }]);
  },
  select: function (tabId) {
    this.next({ id: tabId, type: _ACTIONS.SELECT_TAB });
  }
});