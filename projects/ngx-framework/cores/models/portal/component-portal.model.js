import { Class } from '@angular/core';

import { ngxBasePortal } from './base-portal.model';


export var ngxComponentPortal = Class({
  extends: ngxBasePortal,

  constructor: function ngxComponentPortal(component, viewContainerRef, injector) {
    ngxBasePortal.apply(this, arguments);

    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
  }
});