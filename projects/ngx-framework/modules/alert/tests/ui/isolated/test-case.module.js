import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxAlertModule } from '../../../../alert';

import { ngxTestCaseComponent } from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxAlertModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});