import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ngxModalModule } from '../../../../modal';
import { ngxPortalModule } from '../../../../../cores';
import { ngxButtonModule } from '../../../../button';

import { 
  ngxChildComponent,
  ngxTestCaseComponent 
} from './test-case.component';


export var ngxTestCaseModule = NgModule({
  imports: [ 
    BrowserModule, 
    ngxPortalModule, 
    ngxButtonModule,
    ngxModalModule 
  ],
  declarations: [ ngxChildComponent, ngxTestCaseComponent ],
  entryComponents: [ ngxChildComponent ],
  bootstrap: [ ngxTestCaseComponent ]
})
.Class({
  constructor: function(){}
});