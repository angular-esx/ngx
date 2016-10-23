import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxCardContentDirectiveMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      selector: 'ngx-card-content',
      host: {
        '[class.ngx-card-content]': 'true'
      }
    });
  }
});

export var ngxCardContentDirective = Directive(new ngxCardContentDirectiveMetadata())
.Class({
  constructor: function(){}
});