import { 
  Class, 
  Directive 
} from '@angular/core';


export var ngxBreadcrumbItemDirectiveMetadata = Class({
  constructor: function ngxBreadcrumbItemDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-breadcrumb-item]',
      host: {
        '[class.ngx-breadcrumb-item]': 'true'
      }
    });
  }
});

export var ngxBreadcrumbItemDirective = Directive(new ngxBreadcrumbItemDirectiveMetadata())
.Class({
  constructor: function ngxBreadcrumbItemDirective() { }
});