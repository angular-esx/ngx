import { Directive } from '@angular/core';


export var ngxCardContentDirective = Directive({
  selector: 'ngx-card-content',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-card-content]': 'true'
  }
})
.Class({
  constructor: function(){}
});