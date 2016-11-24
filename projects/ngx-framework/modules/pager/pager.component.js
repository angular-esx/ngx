import { 
  Class,
  Component,
  ElementRef,
  Renderer,
  Inject,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from '../../cores';

import { ngxPageBuilder } from './models/page-builder.model';


export var ngxPagerComponentMetadata = Class({
  constructor: function ngxPagerComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-pager',
      templateUrl: './templates/pager.html',
      styleUrls: ['./styles/index.scss'],
      inputs: [
        'type',
        'totalPages: total-pages',
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

export var ngxPagerComponent = Component(new ngxPagerComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ngxPagerComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);

      this.setPageEmitter = new EventEmitter();
      this.changePageEmitter = new EventEmitter();
    }
  ],

  initDefaultValues: function () {
    if (ngxUtils.isEmpty(this.totalPages) || this.totalPages < 0) { this.totalPages = 0; }
    else { this.totalPages = parseInt(this.totalPages); }

    if (ngxUtils.isEmpty(this.currentPage) || this.currentPage < 1) { this.currentPage = 1; }
    else { this.currentPage = parseInt(this.currentPage); }

    if (ngxUtils.isNull(this.showPrevious)) { this.showPrevious = true; }
    if (ngxUtils.isNull(this.showNext)) { this.showNext = true; }

    this.pageBuilder = this.initPageBuilder();
    this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
  },

  getPrefixClass: function () {
    return 'ngx-pager';
  },

  prev: function (event) {
    this.changePage(event, this.pageBuilder.prevPage);
  },

  next: function (event) {
    this.changePage(event, this.pageBuilder.nextPage);
  },

  changePage: function(event, page) {
    if (!page || !page.number) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return false;
    }

    var _isCanceled = false;
    this.changePageEmitter.emit({
      page: Object.assign({}, page),
      cancel: function () {
        _isCanceled = true;

        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    if(_isCanceled){ return; }

    this.currentPage = page.number;
    this.pageBuilder.build(this.totalPages, this.currentPage, this.setPageEmitter);
  },

  initPageBuilder: function(){ return new ngxPageBuilder(); }
});