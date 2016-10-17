import { NgModule } from '@angular/core';

import { ngxCardHeaderComponent } from './card-header.component';
import { ngxCardTitleComponent } from './card-title.component';
import { ngxCardSubtitleComponent } from './card-subtitle.component';
import { ngxCardTextComponent } from './card-text.component';
import { ngxCardImageComponent } from './card-image.component';
import { ngxCardContentComponent } from './card-content.component';
import { ngxCardActionsComponent } from './card-actions.component';
import { ngxCardComponent } from './card.component';


export var ngxCardModule = NgModule({
  declarations: [ 
    ngxCardHeaderComponent,
    ngxCardTitleComponent,
    ngxCardSubtitleComponent,
    ngxCardTextComponent,
    ngxCardImageComponent,
    ngxCardContentComponent,
    ngxCardActionsComponent,
    ngxCardComponent
  ],
  exports: [ 
    ngxCardHeaderComponent,
    ngxCardTitleComponent,
    ngxCardSubtitleComponent,
    ngxCardTextComponent,
    ngxCardImageComponent,
    ngxCardContentComponent,
    ngxCardActionsComponent,
    ngxCardComponent
  ]
})
.Class({
  constructor: function(){}
});