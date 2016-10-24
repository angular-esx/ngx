import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxCardImageDirectiveMetadata = Class({
  constructor: function ngxCardImageDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-card-image',
      host: {
        '[class.ngx-card-image]': 'true'
      }
    });
  }
});

export var ngxCardImageDirective = Directive(new ngxCardImageDirectiveMetadata())
.Class({
  constructor: function ngxCardImageDirective(){}
});