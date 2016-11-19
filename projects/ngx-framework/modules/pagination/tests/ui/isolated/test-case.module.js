import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxPaginationModule } from '../../../../pagination';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxPaginationModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});