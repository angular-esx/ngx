import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ngxIconModule } from '../../../../icon';

import { ngxTestCaseComponent } from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule,
    ngxIconModule 
  ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});