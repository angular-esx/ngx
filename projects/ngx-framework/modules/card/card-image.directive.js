import { Directive } from '@angular/core';


export var ngxCardImageDirective = Directive({
  selector: 'ngx-card-image',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-card-image]': 'true'
  }
})
.Class({
  constructor: function(){}
});