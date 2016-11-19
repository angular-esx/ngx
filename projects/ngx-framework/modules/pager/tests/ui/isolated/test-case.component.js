import { Component } from '@angular/core';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: function () {},

  setPage: function (event) {
    event.setPrevLink('https://mywebsite.com/page/' + event.currentPage - 1);
    event.setNextLink('https://mywebsite.com/page/' + event.currentPage + 1);
  },

  changePage: function (event) {
    event.cancel();
    alert('Changed to page: ' + event.page.number);
  }
});