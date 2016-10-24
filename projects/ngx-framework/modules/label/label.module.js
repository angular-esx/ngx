import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxLabelComponent } from './label.component';

var _DIRECTIVES = [
  ngxLabelComponent
];


export var ngxLabelModuleMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxLabelModule = NgModule(new ngxLabelModuleMetadata())
.Class({
  constructor: function(){}
});