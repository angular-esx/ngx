import { Directive } from '@angular/core';


export var ngxNavbarBrandDirective = Directive({
  selector: '[ngx-navbar-brand]',
  host: {
    '[class.ngx-navbar-brand]': 'true'
  }
})
.Class({
  constructor: function(){}
});