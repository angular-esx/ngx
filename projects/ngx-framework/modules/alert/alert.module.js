import { 
  Class,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ngxAlertLinkDirective } from './alert-link.directive';
import { ngxAlertComponent } from './alert.component';
import { ngxAlertService } from './services/alert.service';

var _DIRECTIVES = [
  ngxAlertLinkDirective,
  ngxAlertComponent
];


export var ngxAlertModuleMetadata = Class({
  constructor: function ngxAlertModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-alert',
      imports: [ CommonModule ],
      declarations: [].concat(_DIRECTIVES),
      providers: [ ngxAlertService ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxAlertModule = NgModule(new ngxAlertModuleMetadata())
.Class({
  constructor: function ngxAlertModule(){}
});