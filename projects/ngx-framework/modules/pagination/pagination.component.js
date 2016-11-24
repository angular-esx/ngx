﻿import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  Inject,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { 
  WINDOW_TOKEN,
  ngxBaseComponent, 
  ngxUtils 
} from '../../cores';

import { ngxPaginationBuilder } from './models/pagination-builder.model';


export var ngxPaginationComponentMetadata = Class({
  constructor: function ngxPaginationComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-pagination',
      templateUrl: './templates/pagination.html',
      styleUrls: ['./styles/index.scss'],
      inputs: [
        'size',
        'totalPages: total-pages',
        'pageSize: page-size',
        'currentPage: current-page',
        'showPrevious: show-previous',
        'showNext: show-next',
        'initCssClass:class'
      ],
      outputs: ['setPageEmitter: onSetPage', 'changePageEmitter: onChangePage'],
      changeDetection: ChangeDetectionStrategy.OnPush
    });
  }
});

export var ngxPaginationComponent = Component(new ngxPaginationComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    Inject(WINDOW_TOKEN),

    function ngxPaginationComponent(elementRef, renderer, window) {
      ngxBaseComponent.apply(this, arguments);

      this.window = window;
      this.setPageEmitter = new EventEmitter();
      this.changePageEmitter = new EventEmitter();
    }
  ],

  initDefaultValues: function () {
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.totalPages) || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (ngxUtils.isEmpty(this.pageSize) || this.pageSize < 1) { this.pageSize = 10; }
    else { this.pageSize = parseInt(this.pageSize); }

    if (ngxUtils.isEmpty(this.currentPage) || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (ngxUtils.isNull(this.showPrevious)) { this.showPrevious = true; }
    if (ngxUtils.isNull(this.showNext)) { this.showNext = true; }

    if (ngxUtils.isEmpty(this.size)) {
      this.size = 'default';
      _changeRecord = this.buildChangeRecord(_styleProperties.SIZE, this.size);
     }

    this.startPage = this.calcStartPage();

    this.pageBuilder = this.initPageBuilder();
    this.pageBuilder.build(this.totalPages, this.pageSize, this.startPage, this.setPageEmitter);

     return _changeRecord;
  },

  getPrefixClass: function () {
    return 'ngx-pagination';
  },

  prev: function (event) {
    this.changePage(event, this.pageBuilder.getPage(this.currentPage - 1), true);
  },

  next: function (event) {
    this.changePage(event, this.pageBuilder.getPage(this.currentPage + 1), true);
  },

  changePage: function (event, page, doChangeManually) {
    if (page < 1 || page > this.totalPages) { return; }

    var _isCanceled = false;
    this.changePageEmitter.emit({
      page: Object.assign({}, page),
      cancel: function () {
        _isCanceled = true;

        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    if (_isCanceled) { return; }

    if(doChangeManually && page.link) {
      this.window.location.href = page.link;
    }

    this.currentPage = page.number;
    this.startPage = this.calcStartPage();
    this.pageBuilder.build(this.totalPages, this.pageSize, this.startPage, this.setPageEmitter);
  },

  calcStartPage: function() {
    var _startPage = this.currentPage - parseInt(this.pageSize / 2);
    return _startPage <= 0 ? 1 : _startPage;
  },

  initPageBuilder: function() { return new ngxPaginationBuilder(); }
});