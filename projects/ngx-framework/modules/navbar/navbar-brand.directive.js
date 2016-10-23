import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxNavbarBrandDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: '[ngx-navbar-brand]',
      host: {
        '[class.ngx-navbar-brand]': 'true'
      }
    });
  }
});

export var ngxNavbarBrandDirective = Directive(new ngxNavbarBrandDirectiveMetadata())
.Class({
  constructor: function(){}
});