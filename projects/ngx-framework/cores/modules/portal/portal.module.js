import { NgModule } from '@angular/core';

import { ngxPortalHostDirective } from './portal-host.directive';
import { ngxTemplatePortalDirective } from './template-portal.directive';


export var ngxPortalModule = NgModule({
  declarations: [
    ngxPortalHostDirective,
    ngxTemplatePortalDirective
  ],
  exports: [
    ngxPortalHostDirective,
    ngxTemplatePortalDirective
  ]
})
.Class({
  constructor: function(){}
});