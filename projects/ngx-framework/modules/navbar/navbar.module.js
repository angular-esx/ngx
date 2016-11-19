import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxNavbarBrandDirective } from './navbar-brand.directive';
import { ngxNavbarDividerDirective } from './navbar-divider.directive';
import { ngxNavbarItemDirective } from './navbar-item.directive';
import { ngxNavbarComponent } from './navbar.component';

var _DIRECTIVES = [
  ngxNavbarBrandDirective,
  ngxNavbarDividerDirective,
  ngxNavbarItemDirective,
  ngxNavbarComponent 
];


export var ngxNavbarModuleMetadata = Class({
  constructor: function ngxNavbarModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-navbar',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxNavbarModule = NgModule(new ngxNavbarModuleMetadata())
.Class({
  constructor: function ngxNavbarModule(){}
});