import { 
  Class, 
  Directive,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { ngxTemplatePortalDirective } from  '../../cores';


export var ngxTabHeaderDirectiveMetadata = Class({
  constructor: function ngxTabHeaderDirectiveMetadata(){
    Object.assign(this, {
      selector: 'template[ngx-tab-header]'
    });
  }
});

export var ngxTabHeaderDirective = Directive(new ngxTabHeaderDirectiveMetadata())
.Class({
  extends: ngxTemplatePortalDirective,

  constructor: [
    TemplateRef,
    ViewContainerRef,

    function ngxTabHeaderDirective(templateRef, viewContainerRef) {
      ngxTemplatePortalDirective.apply(this, arguments);
    }
  ]
});