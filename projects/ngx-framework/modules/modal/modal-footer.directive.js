import { 
  Class, 
  Directive 
} from '@angular/core';


export var ngxModalFooterDirectiveMetadata = Class({
  constructor: function ngxModalFooterDirectiveMetadata(){
    Object.assign(this, {
      selector: 'ngx-modal-footer',
      host: {
        '[class.ngx-modal-footer]': 'true'
      }
    });
  }
});

export var ngxModalFooterDirective = Directive(new ngxModalFooterDirectiveMetadata())
.Class({
  constructor: function ngxModalFooterDirective() { }
});