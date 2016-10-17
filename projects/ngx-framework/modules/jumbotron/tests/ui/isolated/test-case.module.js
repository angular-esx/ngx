import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxJumbotronModule } from '../../../../jumbotron';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ BrowserModule, ngxJumbotronModule ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});