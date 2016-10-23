import {
  Class,
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { ngxTemplatePortal } from '../../models';


export var ngxTemplatePortalDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: '[ngx-portal]'
    });
  }
});

export var ngxTemplatePortalDirective = Directive(new ngxTemplatePortalDirectiveMetadata())
.Class({
  extends: ngxTemplatePortal,

  constructor: [
    TemplateRef,
    ViewContainerRef,

    function (templateRef, viewContainerRef) {
      ngxTemplatePortal.apply(this, arguments);
    }
  ]
});