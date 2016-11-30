import { Class } from '@angular/core';


export var ngxPaginationBuilder = Class({
  constructor: function ngxPaginationBuilder(){
    this._indexedPages = {};
    this._sortedPages = [];
    this.pages = [];
  },

  build: function (currentPage, totalPages, pageSize, startPage, setPageEmitter) {
    var _page;
    var _setPageLink = function(page){
      return function(link){ page.link = link; };
    };

    for (var i = startPage; i <= totalPages; i++) {
      if (i === startPage + pageSize) { break; }
      if (this._indexedPages[i]) { continue; }

      _page = { number: i, link: '#' };
      setPageEmitter.emit({ 
        pageNumber: _page.number,
        setPageLink: _setPageLink(_page)
      });

      this._indexedPages[i] = _page;

      this._sortedPages.push(_page);
    }

    this._sortedPages.sort(function (item01, item02) {
      return item01.number === item02.number ? 0 : (item01.number > item02.number ? 1 : -1);
    });

    var _tempPages = [];
    for(i = 0; i < this._sortedPages.length; i++) {
      _page = this._sortedPages[i];

      if (_page.number === startPage + pageSize) { break; }

      if (_page.number >= startPage) {
        _tempPages.push(_page);
      }
    }

    if(currentPage > 1){
      _tempPages.splice(0, 0, Object.assign({ isPrevLink: true }, this._indexedPages[currentPage - 1]));
    }

    if(currentPage < totalPages){
      _tempPages.push(Object.assign({ isNextLink: true }, this._indexedPages[currentPage + 1]));
    }

    this.pages = _tempPages;
  },

  getPage: function(pageNumber) {
    return Object.assign({}, this._indexedPages[pageNumber]);
  }
});