import {
  Class, 
  NgModule 
} from '@angular/core';

import { ngxPortalHostDirective } from './portal-host.directive';
import { ngxTemplatePortalDirective } from './template-portal.directive';

var _DIRECTIVES = [
  ngxPortalHostDirective,
  ngxTemplatePortalDirective
];


export var ngxPortalModuleMetadata = Class({
  constructor: function ngxPortalModuleMetadata(){
    Object.assign(this, {
      declarations: _DIRECTIVES,
      exports: _DIRECTIVES
    });
  }
});

export var ngxPortalModule = NgModule(new ngxPortalModuleMetadata())
.Class({
  constructor: function ngxPortalModule(){}
});