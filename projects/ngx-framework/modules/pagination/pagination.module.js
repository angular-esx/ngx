import { 
  Class,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { WINDOW_PROVIDERS } from '../../cores';

import { ngxPaginationComponent } from './pagination.component';

var _DIRECTIVES = [
  ngxPaginationComponent
];


export var ngxPaginationModuleMetadata = Class({
  constructor: function ngxPaginationModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-pagination',
      imports: [ CommonModule ],
      declarations: [].concat(_DIRECTIVES),
      providers: [ WINDOW_PROVIDERS ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxPaginationModule = NgModule(new ngxPaginationModuleMetadata())
.Class({
  constructor: function ngxPaginationModule(){}
});