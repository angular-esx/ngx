import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxBreadcrumbModule } from '../../../../breadcrumb';
import { ngxLinkModule } from '../../../../link';

import { ngxTestCaseComponent } from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ 
    BrowserModule, 
    ngxLinkModule, 
    ngxBreadcrumbModule 
  ],
  declarations: [ ngxTestCaseComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});