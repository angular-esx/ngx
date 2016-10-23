import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxNavbarDividerDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: 'ngx-navbar-divider',
      host: {
        '[class.ngx-navbar-divider]': 'true'
      }
    });
  }
});

export var ngxNavbarDividerDirective = Directive(new ngxNavbarDividerDirectiveMetadata())
.Class({
  constructor: function(){}
});