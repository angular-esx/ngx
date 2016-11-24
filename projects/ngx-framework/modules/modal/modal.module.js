import { 
  Class,
  NgModule 
} from '@angular/core';

import { DOCUMENT_PROVIDERS } from '../../cores';

import { ngxModalHeaderComponent } from './modal-header.component';
import { ngxModalBodyDirective } from './modal-body.directive';
import { ngxModalFooterDirective } from './modal-footer.directive';
import { ngxModalComponent } from './modal.component';
import { ngxModalService } from './services/modal.service';

var _DIRECTIVES = [
  ngxModalHeaderComponent,
  ngxModalBodyDirective,
  ngxModalFooterDirective,
  ngxModalComponent
];


export var ngxModalModuleMetadata = Class({
  constructor: function ngxModalModuleMetadata(){
    Object.assign(this, {
      id: 'ngx-modal',
      declarations: [].concat(_DIRECTIVES),
      providers: [
        DOCUMENT_PROVIDERS, 
        ngxModalService
      ],
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var ngxModalModule = NgModule(new ngxModalModuleMetadata())
.Class({
  constructor: function ngxModalModule(){}
});