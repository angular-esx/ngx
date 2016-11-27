import { 
  Class,
  NgModule 
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ngxPortalModule } from '../../cores';

import { ngxTabHeaderDirective } from './tab-header.directive';
import { ngxTabContentDirective } from './tab-content.directive';
import { ngxTabDirective } from './tab.directive';
import { ngxTabsComponent } from './tabs.component';
import { ngxTabsService } from './services/tabs.service';

var _DIRECTIVES = [
  ngxTabHeaderDirective,
  ngxTabContentDirective,
  ngxTabDirective,
  ngxTabsComponent
];


export var ngxTabsModuleMetadata = Class({
  constructor: function ngxTabsModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-tabs',
      imports: [ 
        CommonModule, 
        ngxPortalModule 
      ],
      declarations: [].concat(_DIRECTIVES),
      providers: [ ngxTabsService ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxTabsModule = NgModule(new ngxTabsModuleMetadata())
.Class({
  constructor: function ngxTabsModule(){}
});