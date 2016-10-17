import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxCardModule } from '../../../../card';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxCardModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});