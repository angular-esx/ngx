import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxNavbarModule } from '../../../../navbar';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxNavbarModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});