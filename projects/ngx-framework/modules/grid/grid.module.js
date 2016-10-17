import { NgModule } from '@angular/core';

import { ngxGridColDirective } from './grid-col.directive';
import { ngxGridRowDirective } from './grid-row.directive';
import { ngxGridComponent } from './grid.component';


export var ngxGridModule = NgModule({
  declarations: [ 
    ngxGridColDirective,
    ngxGridRowDirective,
    ngxGridComponent
  ],
  exports: [ 
    ngxGridColDirective,
    ngxGridRowDirective,
    ngxGridComponent
  ]
})
.Class({
  constructor: function(){}
});