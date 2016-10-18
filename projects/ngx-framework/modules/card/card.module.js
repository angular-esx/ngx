import { NgModule } from '@angular/core';

import { ngxCardTitleDirective } from './card-title.directive';
import { ngxCardSubtitleDirective } from './card-subtitle.directive';
import { ngxCardTextDirective } from './card-text.directive';
import { ngxCardImageDirective } from './card-image.directive';
import { ngxCardContentDirective } from './card-content.directive';
import { ngxCardActionsDirective } from './card-actions.directive';
import { ngxCardHeaderComponent } from './card-header.component';
import { ngxCardComponent } from './card.component';


export var ngxCardModule = NgModule({
  declarations: [ 
    ngxCardTitleDirective,
    ngxCardSubtitleDirective,
    ngxCardTextDirective,
    ngxCardImageDirective,
    ngxCardContentDirective,
    ngxCardActionsDirective,
    ngxCardHeaderComponent,
    ngxCardComponent
  ],
  exports: [ 
    ngxCardTitleDirective,
    ngxCardSubtitleDirective,
    ngxCardTextDirective,
    ngxCardImageDirective,
    ngxCardContentDirective,
    ngxCardActionsDirective,
    ngxCardHeaderComponent,
    ngxCardComponent
  ]
})
.Class({
  constructor: function(){}
});