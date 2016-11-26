import { 
  Class,
  NgModule
} from '@angular/core';

import { ngxBreadcrumbItemDirective } from './breadcrumb-item.directive';
import { ngxBreadcrumbComponent } from './breadcrumb.component';

var _DIRECTIVES = [
  ngxBreadcrumbItemDirective,
  ngxBreadcrumbComponent
];


export var ngxBreadcrumbModuleMetadata = Class({
  constructor: function ngxBreadcrumbModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-breadcrumb',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxBreadcrumbModule = NgModule(new ngxBreadcrumbModuleMetadata())
.Class({
  constructor: function ngxBreadcrumbModule(){}
});