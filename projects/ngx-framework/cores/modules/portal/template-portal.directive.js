import {
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { ngxTemplatePortal } from '../../models';


export var ngxTemplatePortalDirective = Directive({
  selector: '[ngx-portal]'
})
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