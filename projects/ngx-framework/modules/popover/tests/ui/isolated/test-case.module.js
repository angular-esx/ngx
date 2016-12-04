import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxPopoverModule } from '../../../../popover';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxPopoverModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});