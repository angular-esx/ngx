import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxProgressModule } from '../../../../progress';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxProgressModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});