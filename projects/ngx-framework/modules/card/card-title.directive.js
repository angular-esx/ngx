import { Directive } from '@angular/core';


export var ngxCardTitleDirective = Directive({
  selector: 'ngx-card-title',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-card-title]': 'true'
  }
})
.Class({
  constructor: function(){}
});