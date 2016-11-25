import {
  Class, 
  NgModule 
} from '@angular/core';

import { ngxItemTitleDirective } from './item-title.directive';
import { ngxItemSubtitleDirective } from './item-subtitle.directive';
import { ngxItemTextDirective } from './item-text.directive';
import { ngxItemImageDirective } from './item-image.directive';
import { ngxItemActionsDirective } from './item-actions.directive';
import { ngxItemComponent } from './item.component';

var _DIRECTIVES = [
  ngxItemTitleDirective,
  ngxItemSubtitleDirective,
  ngxItemTextDirective,
  ngxItemImageDirective,
  ngxItemActionsDirective,
  ngxItemComponent
];


export var ngxItemModuleMetadata = Class({
  constructor: function ngxItemModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-item',
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxItemModule = NgModule(new ngxItemModuleMetadata())
.Class({
  constructor: function ngxItemModule(){}
});