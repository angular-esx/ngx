import { Directive } from '@angular/core';


export var ngxNavbarDividerDirective = Directive({
  selector: 'ngx-navbar-divider',
  host: {
    '[class.ngx-navbar-divider]': 'true'
  }
})
.Class({
  constructor: function(){}
});