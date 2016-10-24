import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxCardTextDirectiveMetadata = Class({
  constructor: function ngxCardTextDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-card-text',
      host: {
        '[class.ngx-card-text]': 'true'
      }
    });
  }
});

export var ngxCardTextDirective = Directive(new ngxCardTextDirectiveMetadata())
.Class({
  constructor: function ngxCardTextDirective(){}
});