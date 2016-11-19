import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxGridColDirective } from './grid-col.directive';
import { ngxGridRowDirective } from './grid-row.directive';
import { ngxGridComponent } from './grid.component';

var _DIRECTIVES = [
  ngxGridColDirective,
  ngxGridRowDirective,
  ngxGridComponent
];


export var ngxGridModuleMetadata = Class({
  constructor: function ngxGridModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-grid',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxGridModule = NgModule(new ngxGridModuleMetadata())
.Class({
  constructor: function ngxGridModule(){}
});