import { Component } from '@angular/core';

import * as rx from 'rxjs/rx';

import { ngxPopoverService } from '../../../../popover';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: [ngxPopoverService, function (ngxPopoverService) {
    this.ngxPopoverService = ngxPopoverService;

    this.delay = 1 * 1000;
  }],

  alert: function () {
    alert('You have just clicked me!!!');

    this.ngxPopoverService.toggle('myPopoverWithTemplate');
  },

  togglePopover: function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      rx.Observable.zip
      (
        this.ngxPopoverService.getToggle$('myPopover'),
        this.ngxPopoverService.getEnable$('myPopover', false),
        function (toggleEvent, enableEvent) {
          return [toggleEvent, enableEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxPopoverService.next(event);
      });
    }
    else {
      this.toggled = true;

      rx.Observable.zip
      (
        this.ngxPopoverService.getEnable$('myPopover', true),
        this.ngxPopoverService.getToggle$('myPopover'),
        function (enableEvent, toggleEvent) {
          return [enableEvent, toggleEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxPopoverService.next(event);
      });
    }
  }
});