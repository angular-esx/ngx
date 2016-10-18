import { Directive } from '@angular/core';


export var ngxCardSubtitleDirective = Directive({
  selector: 'ngx-card-subtitle',
  inputs: ['initCssClass:class'],
  host: {
    '[class.ngx-card-subtitle]': 'true'
  }
})
.Class({
  constructor: function(){}
});