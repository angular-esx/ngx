import { 
  Class, 
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { ngxTemplatePortalDirective } from  '../../cores';


export var ngxTabContentDirectiveMetadata = Class({
  constructor: function ngxTabContentDirectiveMetadata(){
    Object.assign(this, {
      selector: 'template[ngx-tab-content]'
    });
  }
});

export var ngxTabContentDirective = Directive(new ngxTabContentDirectiveMetadata())
.Class({
  extends: ngxTemplatePortalDirective,

  constructor: [
    TemplateRef,
    ViewContainerRef,

    function ngxTabContentDirective(templateRef, viewContainerRef) {
      ngxTemplatePortalDirective.apply(this, arguments);
    }
  ]
});