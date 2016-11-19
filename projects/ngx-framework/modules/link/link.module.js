import { 
  Class,
  NgModule
} from '@angular/core';

import { ngxLinkComponent } from './link.component';

var _DIRECTIVES = [
  ngxLinkComponent
];


export var ngxLinkModuleMetadata = Class({
  constructor: function ngxLinkModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-link',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxLinkModule = NgModule(new ngxLinkModuleMetadata())
.Class({
  constructor: function ngxLinkModule(){}
});