import {
  Class,
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { ngxTemplatePortal } from '../../models';


export var ngxTemplatePortalDirectiveMetadata = Class({
  constructor: function ngxTemplatePortalDirectiveMetadata(){
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

    function ngxTemplatePortalDirective(templateRef, viewContainerRef) {
      ngxTemplatePortal.apply(this, arguments);
    }
  ]
});