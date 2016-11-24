import { Class } from '@angular/core';


export var ngxPageBuilder = Class({
  constructor: function(){
    this.prevPage = { number: null, link: '#' };
    this.nextPage = { number: null, link: '#' };
  },

  build: function (totalPages, currentPage, setPageEmitter) {
    this.prevPage.number = currentPage - 1 > 0 ? currentPage - 1 : null;
    this.prevPage.link = '#';

    this.nextPage.number = currentPage + 1 <= totalPages ? currentPage + 1 : null;
    this.nextPage.link = '#';

    var _self = this;
    setPageEmitter.emit({
      currentPage: currentPage,
      setPrevLink: function (link) {
        if (_self.prevPage.number > 0) { _self.prevPage.link = link; }
      },
      setNextLink: function (link) {
        if (_self.nextPage.number <= totalPages) { _self.nextPage.link = link; }
      }
    });
  }
});