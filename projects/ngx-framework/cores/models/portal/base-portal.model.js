import { Class } from '@angular/core';

import { ngxUtils } from '../../utils';


export var ngxBasePortal = Class({
  constructor: function ngxBasePortal() {},

  isAttached: function () {
    return !ngxUtils.isNull(this.attachedHost);
  },

  attach: function(host) {
    if (ngxUtils.isNull(host)) {
      throw 'Portal host is required';
    }

    if (host.hasAttached()) {
      throw 'Portal host has already been attached';
    }

    this.attachedHost = host;

    return host.attach(this);
  },

  detach: function () {
    if (ngxUtils.isNull(this.attachedHost)) {
      throw 'Not found portal host';
    }

    this.attachedHost = null;

    return host.detach();
  }
});