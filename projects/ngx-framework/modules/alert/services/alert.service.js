import { Class } from '@angular/core';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';

var _observable = Observable.Observable;

 var _ACTIONS = {
  SHOW_ALERT: 'SHOW_ALERT',
  DISMISS_ALERT: 'DISMISS_ALERT',
};


export var ngxAlertService = Class({
  constructor: function ngxAlertService() {
    var _self = this;

    this.ngxAlert$ = new _observable(function (observer) {
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

  getShow$: function (alertId) {
    return _observable.from([{ id: alertId, type: _ACTIONS.SHOW_ALERT }]);
  },
  show: function (alertId) {
    this.next({ id: alertId, type: _ACTIONS.SHOW_ALERT });
  },

  getDismiss$: function (alertId) {
    return _observable.from([{ id: alertId, type: _ACTIONS.DISMISS_ALERT }]);
  },
  dismiss: function (alertId) {
    this.next({ id: alertId, type: _ACTIONS.DISMISS_ALERT });
  }
});