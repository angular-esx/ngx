import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {
    this.progresses = {
      warning: { value: 75, max: 100 },
      danger: { value: 100, max: 100 }
    };
  }
});