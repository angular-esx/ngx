import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxTooltipModule } from '../../../../tooltip';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxTooltipModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});