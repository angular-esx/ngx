import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxJumbotronComponent } from './jumbotron.component';

var _DIRECTIVES = [
  ngxJumbotronComponent
];


export var ngxJumbotronModuleMetadata = Class({
  constructor: function ngxJumbotronModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-jumbotron',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxJumbotronModule = NgModule(new ngxJumbotronModuleMetadata())
.Class({
  constructor: function ngxJumbotronModule(){}
});