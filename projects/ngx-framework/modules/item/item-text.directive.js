import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxItemTextDirectiveMetadata = Class({
  constructor: function ngxItemTextDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-item-text',
      host: {
        '[class.ngx-item-text]': 'true'
      }
    });
  }
});

export var ngxItemTextDirective = Directive(new ngxItemTextDirectiveMetadata())
.Class({
  constructor: function ngxItemTextDirective(){}
});