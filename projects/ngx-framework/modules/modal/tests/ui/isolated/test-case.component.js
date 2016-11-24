import { 
  Component,
  ViewContainerRef 
} from '@angular/core';

import { ngxComponentPortal } from '../../../../../cores';
import { ngxModalService } from '../../../../modal';


export var ngxChildComponent = Component({
  selector: 'ngx-child-component',
  template: [
    '<h1>Child Component</h1>',
    '<br/><br/>',
    '<h3>This is content of child component</h3>'
  ].join(' '),
})
.Class({
  constructor: function ngxChildComponent() { }
});


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: [
    ViewContainerRef,
    ngxModalService,

    function (viewContainerRef, ngxModalService) {
      this.ngxModalService = ngxModalService;
      this.childComponent = new ngxComponentPortal(ngxChildComponent);
    }
  ],

  showModal: function (modalId) {
    this.ngxModalService.show(modalId);
  },

  hideModal: function (modalId) {
    this.ngxModalService.hide(modalId);
  }
});