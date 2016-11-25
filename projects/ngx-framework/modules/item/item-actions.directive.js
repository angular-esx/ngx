import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxItemActionsDirectiveMetadata = Class({
  constructor: function ngxItemActionsDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-item-actions',
      host: {
        '[class.ngx-item-actions]': 'true'
      }
    });
  }
});

export var ngxItemActionsDirective = Directive(new ngxItemActionsDirectiveMetadata())
.Class({
  constructor: function ngxItemActionsDirective(){}
});