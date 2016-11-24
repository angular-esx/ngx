import { Class } from '@angular/core';

import * as rx from 'rxjs/rx';

var _ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL'
};


export var ngxModalService = Class({
  constructor: function ngxModalService() {
    var _self = this;

    this.ngxModal$ = new rx.Observable(function (observer) {
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

  getShow$: function (modalId) {
    return rx.Observable.from([{ id: modalId, type: _ACTIONS.SHOW_MODAL }]);
  },
  show: function (modalId) {
    this.next({ id: modalId, type: _ACTIONS.SHOW_MODAL });
  },

  getHide$: function (modalId) {
    return rx.Observable.from([{ id: modalId, type: _ACTIONS.HIDE_MODAL }]);
  },
  hide: function (modalId) {
    this.next({ id: modalId, type: _ACTIONS.HIDE_MODAL });
  }
});