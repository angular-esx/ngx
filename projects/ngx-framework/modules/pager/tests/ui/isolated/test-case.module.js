import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxPagerModule } from '../../../../pager';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxPagerModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});