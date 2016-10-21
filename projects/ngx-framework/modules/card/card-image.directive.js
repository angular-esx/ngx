import { Directive } from '@angular/core';


export var ngxCardImageDirective = Directive({
  selector: 'ngx-card-image',
  host: {
    '[class.ngx-card-image]': 'true'
  }
})
.Class({
  constructor: function(){}
});