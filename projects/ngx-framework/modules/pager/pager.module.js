import { 
  Class,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ngxPagerComponent } from './pager.component';

var _DIRECTIVES = [
  ngxPagerComponent
];


export var ngxPagerModuleMetadata = Class({
  constructor: function ngxPagerModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-pager',
      imports: [ CommonModule ],
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxPagerModule = NgModule(new ngxPagerModuleMetadata())
.Class({
  constructor: function ngxPagerModule(){}
});