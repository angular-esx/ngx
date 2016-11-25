import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxCollapseModule } from '../../../../collapse';
import { ngxButtonModule } from '../../../../button';
import { ngxTestCaseComponent }   from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ 
    BrowserModule,
    ngxButtonModule, 
    ngxCollapseModule 
  ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});