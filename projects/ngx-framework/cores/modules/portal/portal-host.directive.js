import {
  Directive,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { ngxUtils } from '../../utils';
import { ngxBasePortalHost } from '../../models';


export var ngxPortalHostDirective = Directive({
  selector: '[ngx-portal-host]',
  inputs: ['portal: ngx-portal-host']
})
.Class({
  extends: ngxBasePortalHost,

  constructor: [
    ComponentFactoryResolver,
    ViewContainerRef,

    function (ComponentFactoryResolver, viewContainerRef) {
      ngxBasePortalHost.apply(this, arguments);

      this.ComponentFactoryResolver = ComponentFactoryResolver;
      this.viewContainerRef = viewContainerRef;
    }
  ],

  ngAfterContentInit: function () {
    var _self = this,
        _setPortal = this.hasAttached() ? this.detach() : Promise.resolve(null);

    _setPortal.then(function() {
      if (_self.portal) { _self.attach(_self.portal); }
    });
  },

  attachComponentPortal: function (portal) {
    portal.attachedHost = this;

    var _self = this,
        _viewContainerRef = ngxUtils.isNull(portal.viewContainerRef) ? this.viewContainerRef : portal.viewContainerRef;

    return this.ComponentFactoryResolver.resolveComponentFactory(portal.component)
    .then(function (componentFactory) {
      var _componentRef = _viewContainerRef.createComponent
      (
        componentFactory,
        _viewContainerRef.length,
        portal.injector || _viewContainerRef.parentInjector
      );

      _self.dispose = function () { _componentRef.destroy(); };

      return _componentRef;
    });
  },

  attachTemplatePortal: function(portal) {
    portal.attachedHost = this;

    this.viewContainerRef.createEmbeddedView(portal.templateRef);

    this.dispose = function () { this.viewContainerRef.clear(); };

    return Promise.resolve(this.attachedPortal.locals);
  }
});