import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {},

  click: function (event) {
    console.log('clicked');
  }
});