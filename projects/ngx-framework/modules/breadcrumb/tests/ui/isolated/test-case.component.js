import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {
    this.categoryPage = 'http://my-website.com/category';
    this.productPage = 'http://my-website.com/product';
  }
});