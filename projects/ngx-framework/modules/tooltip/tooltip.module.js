import { 
  Class,
  NgModule
} from '@angular/core';

import { ngxTooltipTemplateDirective } from './tooltip-template.directive';
import { ngxTooltipDirective } from './tooltip.directive';
import { ngxTooltipComponent } from './tooltip.component';
import { ngxTooltipService } from './services/tooltip.service';

var _DIRECTIVES = [
  ngxTooltipTemplateDirective,
  ngxTooltipDirective,
  ngxTooltipComponent
];


export var ngxTooltipModuleMetadata = Class({
  constructor: function ngxTooltipModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-tooltip',
      declarations: [].concat(_DIRECTIVES),
      providers: [ ngxTooltipService ],
      entryComponents: [ ngxTooltipComponent ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxTooltipModule = NgModule(new ngxTooltipModuleMetadata())
.Class({
  constructor: function ngxTooltipModule(){}
});