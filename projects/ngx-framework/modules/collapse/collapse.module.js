import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxToggleCollapseDirective } from './toggle-collapse.directive';
import { ngxCollapseComponent } from './collapse.component';
import { ngxCollapseService } from './services/collapse.service';

var _DIRECTIVES = [
  ngxToggleCollapseDirective,
  ngxCollapseComponent
];


export var ngxCollapseModuleMetadata = Class({
  constructor: function ngxCollapseModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-collapse',
      declarations: [].concat(_DIRECTIVES),
      providers: [ ngxCollapseService ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxCollapseModule = NgModule(new ngxCollapseModuleMetadata())
.Class({
  constructor: function ngxCollapseModule(){}
});