import { Directive } from '@angular/core';


export var ngxCardContentDirective = Directive({
  selector: 'ngx-card-content',
  host: {
    '[class.ngx-card-content]': 'true'
  }
})
.Class({
  constructor: function(){}
});