import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxLabelModule } from '../../../../label';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxLabelModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});