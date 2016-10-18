import { Directive } from '@angular/core';


export var ngxCardActionsDirective = Directive({
  selector: 'ngx-card-actions',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-card-actions]': 'true'
  }
})
.Class({
  constructor: function(){}
});