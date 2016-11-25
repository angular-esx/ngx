import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxItemModule } from '../../../../item';

import { ngxTestCaseComponent } from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ 
    BrowserModule, 
    ngxItemModule 
  ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});