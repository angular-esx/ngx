import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxGridModule } from '../../../../grid';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxGridModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});