import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxItemImageDirectiveMetadata = Class({
  constructor: function ngxItemImageDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-item-image',
      host: {
        '[class.ngx-item-image]': 'true'
      }
    });
  }
});

export var ngxItemImageDirective = Directive(new ngxItemImageDirectiveMetadata())
.Class({
  constructor: function ngxItemImageDirective(){}
});