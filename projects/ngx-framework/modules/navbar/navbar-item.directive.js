import { Directive } from '@angular/core';


export var ngxNavbarItemDirective = Directive({
  selector: '[ngx-navbar-item]',
  inputs: ['state:ngx-navbar-item-state'],
  host: {
    '[class.ngx-navbar-item]': 'true',
    '[class.ngx-navbar-item-state-active]': 'isActive',
  }
})
.Class({
  constructor: function(){},

  ngOnChanges: function(changeRecord){
    this.isActive = this.state && this.state.indexOf('active') > -1;
  }
});