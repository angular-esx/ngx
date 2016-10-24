import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxCardSubtitleDirectiveMetadata = Class({
  constructor: function ngxCardSubtitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-card-subtitle',
      host: {
        '[class.ngx-card-subtitle]': 'true'
      }
    });
  }
});

export var ngxCardSubtitleDirective = Directive(new ngxCardSubtitleDirectiveMetadata())
.Class({
  constructor: function ngxCardSubtitleDirective(){}
});