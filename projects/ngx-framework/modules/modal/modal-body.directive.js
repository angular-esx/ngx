import { 
  Class, 
  Directive 
} from '@angular/core';


export var ngxModalBodyDirectiveMetadata = Class({
  constructor: function ngxModalBodyDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-modal-body',
      host: {
        '[class.ngx-modal-body]': 'true'
      }
    });
  }
});

export var ngxModalBodyDirective = Directive(new ngxModalBodyDirectiveMetadata())
.Class({
  constructor: function ngxModalBodyDirective() { }
});