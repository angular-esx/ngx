import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {},

  setPage: function (event) {
    event.setPageLink('https://mywebsite.com/page/' + event.pageNumber);
  },

  changePage: function (event) {
    if (event.page.number % 2 === 0) {
      event.cancel();
      alert('Canceled changing page');
    }
  }
});