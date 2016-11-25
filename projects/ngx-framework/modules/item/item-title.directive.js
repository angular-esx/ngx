import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxItemTitleDirectiveMetadata = Class({
  constructor: function ngxItemTitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-item-title',
      host: {
        '[class.ngx-item-title]': 'true'
      }
    });
  }
});

export var ngxItemTitleDirective = Directive(new ngxItemTitleDirectiveMetadata())
.Class({
  constructor: function ngxItemTitleDirective(){}
});