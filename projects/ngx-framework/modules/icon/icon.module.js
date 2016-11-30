import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxIconComponent } from './icon.component';
import { ngxIconService } from './services/icon.service';

var _DIRECTIVES = [
  ngxIconComponent
];


export var ngxIconModuleMetadata = Class({
  constructor: function ngxIconModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-icon',
      declarations: [].concat(_DIRECTIVES),
      providers: [ ngxIconService ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxIconModule = NgModule(new ngxIconModuleMetadata())
.Class({
  constructor: function ngxIconModule(){}
});