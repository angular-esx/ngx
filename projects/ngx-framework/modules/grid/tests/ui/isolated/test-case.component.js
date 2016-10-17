import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {
    this.items = [];

    var _sizes = ['xs-12', 'sm-6', 'md-4', 'lg-3', 'xl-2'].join(' ');
    for (var i = 0; i < 10; i++) {
      this.items.push({ name: 'Item ' + (i + 1), size: _sizes });
    }
  }
});