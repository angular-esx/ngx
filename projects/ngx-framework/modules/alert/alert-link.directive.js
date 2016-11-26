import { 
  Class, 
  Directive 
} from '@angular/core';


export var ngxAlertLinkDirectiveMetadata = Class({
  constructor: function ngxAlertLinkDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-alert-link]',
      host: {
        '[class.ngx-alert-link]': 'true'
      }
    });
  }
});

export var ngxAlertLinkDirective = Directive(new ngxAlertLinkDirectiveMetadata())
.Class({
  constructor: function ngxAlertLinkDirective() { }
});
