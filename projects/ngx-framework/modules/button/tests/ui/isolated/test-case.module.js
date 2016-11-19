import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxButtonModule } from '../../../../button';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxButtonModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});