import { Component } from '@angular/core';

import { ngxAlertService } from '../../../../alert';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: [ngxAlertService, function (ngxAlertService) {
    this.ngxAlertService = ngxAlertService;

    this.href = 'https://translate.google.com.vn';
  }],

  ngAfterViewInit: function () {
    var _self = this;
    setTimeout(function () {
      _self.ngxAlertService.show('myInfoAlert');
      _self.ngxAlertService.dismiss('mySuccessAlert');
    }, 2 * 1000);
  },

  showing: function (event) {
    console.log('showing', event);
  },

  shown: function (event) {
    console.log('shown', event);
  },

  dismissing: function (event) {
    console.log('dismissing', event);
  },

  dismissed: function (event) {
    console.log('dismissed', event);
  }

});