import { 
  NO_ERRORS_SCHEMA,
  Class,
  NgModule
} from '@angular/core';

import { ngxButtonComponent } from './button.component';

var _DIRECTIVES = [
  ngxButtonComponent
];


export var ngxButtonModuleMetadata = Class({
  constructor: function ngxButtonModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-button',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES),
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  }
});

export var ngxButtonModule = NgModule(new ngxButtonModuleMetadata())
.Class({
  constructor: function ngxButtonModule(){}
});