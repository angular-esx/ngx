import { Class } from '@angular/core';

import { ngxBasePortal } from './base-portal.model';


export var ngxTemplatePortal = Class({
  extends: ngxBasePortal,

  constructor: function (templateRef, viewContainerRef) {
    ngxBasePortal.apply(this, arguments);

    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  },

  attach: function(host, locals) {
    this.locals = locals || {};

    return ngxBasePortal.prototype.attach.apply(this, [host]);
  },

  detach: function() {
    this.locals = {};

    return ngxBasePortal.prototype.detach.apply(this, [host]);
  }
});