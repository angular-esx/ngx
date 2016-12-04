import { Component } from '@angular/core';

import * as rx from 'rxjs/rx';

import { ngxTooltipService } from '../../../../tooltip';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: [ngxTooltipService, function (ngxTooltipService) {
    this.ngxTooltipService = ngxTooltipService;

    this.delay = 1 * 1000;
  }],

  alert: function () {
    alert('You have just clicked me!!!');
    
    this.ngxTooltipService.hide('myTooltipWithTemplate');
  },

  toggleTooltip: function () {
    var _self = this;
    
    if (this.toggled) {
      this.toggled = false;
      
      rx.Observable.zip
      (
        this.ngxTooltipService.getHide$('myTooltip'),
        this.ngxTooltipService.getEnable$('myTooltip', false),
        function (hideEvent, enableEvent) {
          return [hideEvent, enableEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxTooltipService.next(event);
      });
    }
    else {
      this.toggled = true;

      rx.Observable.zip
      (
        this.ngxTooltipService.getEnable$('myTooltip', true),
        this.ngxTooltipService.getShow$('myTooltip'),
        function (enableEvent, showEvent) {
          return [enableEvent, showEvent];
        }
      )
      .subscribe(function (event) {
        _self.ngxTooltipService.next(event);
      });
    }
  }
});