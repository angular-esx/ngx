import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxItemSubtitleDirectiveMetadata = Class({
  constructor: function ngxItemSubtitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-item-subtitle',
      host: {
        '[class.ngx-item-subtitle]': 'true'
      }
    });
  }
});

export var ngxItemSubtitleDirective = Directive(new ngxItemSubtitleDirectiveMetadata())
.Class({
  constructor: function ngxItemSubtitleDirective(){}
});