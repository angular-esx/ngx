import {
  Class, 
  NgModule 
} from '@angular/core';

import { ngxHideUpDirective } from './hide-up.directive';
import { ngxHideDownDirective } from './hide-down.directive';
import { ngxBaseHide } from './models/base-hide.model';

var _DIRECTIVES = [
  ngxHideUpDirective,
  ngxHideDownDirective,
];


export var ngxHideModuleMetadata = Class({
  constructor: function ngxHideModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-hide',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxHideModule = NgModule(new ngxHideModuleMetadata())
.Class({
  constructor: function ngxHideModule(){}
});