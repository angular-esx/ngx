import {
  Class,
  Directive,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { ngxUtils } from '../../utils';
import { ngxBasePortalHost } from '../../models';


export var ngxPortalHostDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: '[ngx-portal-host]',
      inputs: ['portal: ngx-portal-host']
    });
  }
});

export var ngxPortalHostDirective = Directive(new ngxPortalHostDirectiveMetadata())
.Class({
  extends: ngxBasePortalHost,

  constructor: [
    ComponentFactoryResolver,
    ViewContainerRef,

    function (componentFactoryResolver, viewContainerRef) {
      ngxBasePortalHost.apply(this, arguments);

      this.componentFactoryResolver = componentFactoryResolver;
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

    var _viewContainerRef = ngxUtils.isNull(portal.viewContainerRef) ? this.viewContainerRef : portal.viewContainerRef,
        _componentFactory = this.componentFactoryResolver.resolveComponentFactory(portal.component);

    var _componentRef = _viewContainerRef.createComponent
    (
      _componentFactory,
      _viewContainerRef.length,
      portal.injector || _viewContainerRef.parentInjector
    );

    this.dispose = function () { _componentRef.destroy(); };

    return Promise.resolve(_componentRef);
  },

  attachTemplatePortal: function(portal) {
    portal.attachedHost = this;

    this.viewContainerRef.createEmbeddedView(portal.templateRef);

    this.dispose = function () { this.viewContainerRef.clear(); };

    return Promise.resolve(this.attachedPortal.locals);
  }
});