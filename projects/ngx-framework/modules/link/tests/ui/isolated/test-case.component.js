import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {
    this.href = "http://www.google.com";
  },

  click: function (event) {
    console.log('clicked');
  }
});