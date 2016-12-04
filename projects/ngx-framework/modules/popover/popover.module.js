import { 
  Class,
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ngxPopoverTemplateDirective } from './popover-template.directive';
import { ngxPopoverDirective } from './popover.directive';
import { ngxPopoverComponent } from './popover.component';
import { ngxPopoverService } from './services/popover.service';

var _DIRECTIVES = [
  ngxPopoverTemplateDirective,
  ngxPopoverDirective,
  ngxPopoverComponent
];


export var ngxPopoverModuleMetadata = Class({
  constructor: function ngxPopoverModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-popover',
      imports: [ CommonModule ],
      declarations: [].concat(_DIRECTIVES),
      providers: [ ngxPopoverService ],
      entryComponents: [ ngxPopoverComponent ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxPopoverModule = NgModule(new ngxPopoverModuleMetadata())
.Class({
  constructor: function ngxPopoverModule(){}
});