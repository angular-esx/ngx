import { Class } from '@angular/core';

import { ngxUtils } from '../../utils';
import { ngxBasePortalHost } from './base-portal-host.model';


export var ngxDomPortalHost = Class({
  extends: ngxBasePortalHost,

  constructor: function ngxDomPortalHost(hostElement, componentResolver) {
    ngxBasePortalHost.apply(this, arguments);

    this.hostElement = hostElement;
    this.componentResolver = componentResolver;
  },

  attachComponentPortal: function(portal) {
    if (ngxUtils.isNull(portal.viewContainerRef)) {
      throw 'Not found viewContainerRef from component portal';
    }

    var _self = this;

    return this.componentResolver.resolveComponent(portal.component)
      .then(function(componentFactory) {
        var _componentRef = portal.viewContainerRef.createComponent
        (
          componentFactory,
          portal.viewContainerRef.length,
          portal.injector || portal.viewContainerRef.parentInjector
        );

        _self.hostElement.appendChild(_componentRef.hostView.rootNodes[0]);

        _self.dispose = function () { _componentRef.destroy(); };

        return _componentRef;
      });
  },

  attachTemplatePortal: function(portal) {
    if (ngxUtils.isNull(portal.viewContainerRef)) {
      throw 'Not found viewContainerRef from template portal';
    }

    var _viewRef = portal.viewContainerRef.createEmbeddedView(portal.templateRef);

    _viewRef.rootNodes.forEach(function(rootNode) {
      this.hostElement.appendChild(rootNode);
    }, this);

    this.dispose = function() {
      var _index = portal.viewContainerRef.indexOf(_viewRef);
      if(_index != -1){ portal.viewContainerRef.remove(_index); }
    };

    return Promise.resolve(this.attachedPortal.locals);
  },

  destroy: function () {
    if (!ngxUtils.isNull(this.hostElement.parentNode)) {
      this.hostElement.parentNode.removeChild(this.hostElement);
    }

    ngxBasePortalHost.prototype.destroy.apply(this);
  }
});