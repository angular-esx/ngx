import { 
  Class,
  Directive 
} from '@angular/core';


export var ngxNavbarItemDirectiveMetadata = Class({
  constructor: function ngxNavbarItemDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-navbar-item]',
      inputs: ['state:ngx-navbar-item-state'],
      host: {
        '[class.ngx-navbar-item]': 'true',
        '[class.ngx-navbar-item-state-active]': 'isActive',
      }
    });
  }
});

export var ngxNavbarItemDirective = Directive(new ngxNavbarItemDirectiveMetadata())
.Class({
  constructor: function ngxNavbarItemDirective(){},

  ngOnChanges: function(changeRecord){
    this.isActive = this.state && this.state.indexOf('active') > -1;
  }
});