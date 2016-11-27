import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxTabsModule } from '../../../../tabs';
import { ngxLinkModule } from '../../../../link';

import { ngxTestCaseComponent } from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxLinkModule, ngxTabsModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});