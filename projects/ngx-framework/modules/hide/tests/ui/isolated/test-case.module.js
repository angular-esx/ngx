import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxHideModule } from '../../../../hide';

import { ngxTestCaseComponent } from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ 
    BrowserModule, 
    ngxHideModule 
  ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});