import { 
  Class, 
  Component 
} from '@angular/core';

import { ngxModalComponent } from  './modal.component';


export var ngxModalHeaderComponentMetadata = Class({
  constructor: function ngxModalHeaderComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-modal-header',
      templateUrl: './templates/modal-header.html',
      host: {
        '[class.ngx-modal-header]': 'true'
      }
    });
  }
});

export var ngxModalHeaderComponent = Component(new ngxModalHeaderComponentMetadata())
.Class({
  constructor: [
    ngxModalComponent,

    function ngxModalHeaderComponent(ngxModal) {
      this.ngxModal = ngxModal;
    }
  ],

  hide: function () {
    this.ngxModal.hide();
  }
});