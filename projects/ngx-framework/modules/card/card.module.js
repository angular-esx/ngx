import {
  Class, 
  NgModule 
} from '@angular/core';

import { ngxCardTitleDirective } from './card-title.directive';
import { ngxCardSubtitleDirective } from './card-subtitle.directive';
import { ngxCardTextDirective } from './card-text.directive';
import { ngxCardImageDirective } from './card-image.directive';
import { ngxCardContentDirective } from './card-content.directive';
import { ngxCardActionsDirective } from './card-actions.directive';
import { ngxCardHeaderComponent } from './card-header.component';
import { ngxCardComponent } from './card.component';

var _DIRECTIVES = [
  ngxCardTitleDirective,
  ngxCardSubtitleDirective,
  ngxCardTextDirective,
  ngxCardImageDirective,
  ngxCardContentDirective,
  ngxCardActionsDirective,
  ngxCardHeaderComponent,
  ngxCardComponent
];


export var ngxCardModuleMetadata = Class({
  constructor: function(){
    Object.assign(this, {
      declarations: _DIRECTIVES,
      exports: _DIRECTIVES
    });
  }
});

export var ngxCardModule = NgModule(new ngxCardModuleMetadata())
.Class({
  constructor: function(){}
});