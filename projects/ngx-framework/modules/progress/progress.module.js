import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxProgressComponent } from './progress.component';

var _DIRECTIVES = [
  ngxProgressComponent
];


export var ngxProgressModuleMetadata = Class({
  constructor: function ngxProgressModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-progress',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxProgressModule = NgModule(new ngxProgressModuleMetadata())
.Class({
  constructor: function ngxProgressModule(){}
});