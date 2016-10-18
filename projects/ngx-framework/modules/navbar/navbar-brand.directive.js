import { Directive } from '@angular/core';


export var ngxNavbarBrandDirective = Directive({
  selector: '[ngx-navbar-brand]',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-navbar-brand]': 'true'
  }
})
.Class({
  constructor: function(){}
});