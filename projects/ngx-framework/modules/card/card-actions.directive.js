import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxCardActionsDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: 'ngx-card-actions',
      host: {
        '[class.ngx-card-actions]': 'true'
      }
    });
  }
});

export var ngxCardActionsDirective = Directive(new ngxCardActionsDirectiveMetadata())
.Class({
  constructor: function(){}
});