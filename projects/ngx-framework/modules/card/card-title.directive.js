import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxCardTitleDirectiveMetadata = Class({
  constructor: function ngxCardTitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-card-title',
      host: {
        '[class.ngx-card-title]': 'true'
      }
    });
  }
});

export var ngxCardTitleDirective = Directive(new ngxCardTitleDirectiveMetadata())
.Class({
  constructor: function ngxCardTitleDirective(){}
});