import { Class } from '@angular/core';

import Observable from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/share';

var _observable = Observable.Observable;

var _ACTIONS = {
  TOGGLE_COLLAPSE: 'TOGGLE_COLLAPSE',
  SHOW_COLLAPSE: 'SHOW_COLLAPSE',
  HIDE_COLLAPSE: 'HIDE_COLLAPSE'
};


export var ngxCollapseService = Class({
  constructor: function ngxCollapseService() {
    var _self = this;

    this.ngxCollapse$ = new _observable(function (observer) {
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

  getToggle$: function (collapseId) {
    return _observable.from([{ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE }]);
  },
  toggle: function (collapseId) {
    this.next({ id: collapseId, type: _ACTIONS.TOGGLE_COLLAPSE });
  },

  getShow$: function (collapseId, groupId) {
    return _observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE }]);
  },
  show: function (collapseId, groupId) {
    this.next({ id: collapseId, group: groupId, type: _ACTIONS.SHOW_COLLAPSE });
  },

  getHide$: function (collapseId, groupId) {
    return _observable.from([{ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE }]);
  },
  hide: function (collapseId, groupId) {
    this.next({ id: collapseId, group: groupId, type: _ACTIONS.HIDE_COLLAPSE });
  }
});