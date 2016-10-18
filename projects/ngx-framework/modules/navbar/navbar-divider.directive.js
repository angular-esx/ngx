import { Directive } from '@angular/core';


export var ngxNavbarDividerDirective = Directive({
  selector: 'ngx-navbar-divider',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-navbar-divider]': 'true'
  }
})
.Class({
  constructor: function(){}
});