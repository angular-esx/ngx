import { Directive } from '@angular/core';


export var ngxCardTextDirective = Directive({
  selector: 'ngx-card-text',
  host: {
    '[class.ngx-card-text]': 'true'
  }
})
.Class({
  constructor: function(){}
});