import { NgModule } from '@angular/core';

import { ngxNavbarBrandDirective } from './navbar-brand.directive';
import { ngxNavbarDividerDirective } from './navbar-divider.directive';
import { ngxNavbarItemDirective } from './navbar-item.directive';
import { ngxNavbarComponent } from './navbar.component';


export var ngxNavbarModule = NgModule({
  declarations: [ 
    ngxNavbarBrandDirective,
    ngxNavbarDividerDirective,
    ngxNavbarItemDirective,
    ngxNavbarComponent 
  ],
  exports: [ 
    ngxNavbarBrandDirective,
    ngxNavbarDividerDirective,
    ngxNavbarItemDirective,
    ngxNavbarComponent  
  ]
})
.Class({
  constructor: function(){}
});