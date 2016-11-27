import { 
  Class, 
  Component,
  ElementRef,
  Renderer,
  ContentChildren,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from  '../../cores';

import { ngxTabDirective } from './tab.directive';
import { ngxTabsService } from './services/tabs.service';


export var ngxTabsComponentMetadata = Class({
  constructor: function ngxTabsComponentMetadata(){
    Object.assign(this, {
      selector: 'ngx-tabs',
      templateUrl: './templates/tabs.html',
      styleUrls: ['./styles/index.scss'],
      inputs: ['type', 'initCssClass:class'],
      outputs: ['changingTabEmitter: onChangingTab', 'changedTabEmitter: onChangedTab'],
      queries: {
        tabs: new ContentChildren(ngxTabDirective)
      }
    });
  }
});

export var ngxTabsComponent = Component(new ngxTabsComponentMetadata())
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,
    ngxTabsService,

    function ngxTabsComponent(elementRef, renderer, ngxTabsService) {
      ngxBaseComponent.apply(this, arguments);

      this.ngxTabsService = ngxTabsService;
      this.changingTabEmitter = new EventEmitter(false);
      this.changedTabEmitter = new EventEmitter();
    }
  ],

  ngAfterContentInit: function () {
    if (!this.tabs) { return 'ngxTab is required at least one'; }

    this.subscribe();

    this.currentActiveTab = { index: 0, item: this.tabs.first };
    this.currentActiveTab.item.activate(true);

    ngxBaseComponent.prototype.ngAfterContentInit.apply(this);
  },

  ngOnDestroy: function () {
    if (this.subscription) { this.subscription.unsubscribe(); }

    ngxBaseComponent.prototype.ngOnDestroy.apply(this);
  },

  getPrefixClass: function () {
    return 'ngx-tabs';
  },

  subscribe: function () {
    var _self = this;
    this.subscription = this.ngxTabsService.ngxTabs$.subscribe(function (event) {
      if (ngxUtils.isEmpty(event)) { return; }

      var _events = ngxUtils.isArray(event) ? event : [event];
      var _actions = _self.ngxTabsService.getActions();
      var _tabs = _self.tabs.toArray();

      _events.forEach(function (_event) {
        if (_event.id) {
          _tabs.forEach(function (tab, index) {
            if (tab.id === _event.id) {
              if (_event.type === _actions.ENABLE_TAB) {
                _self.enable(tab, _event.isEnabled);
              }
              else if (_event.type === _actions.SELECT_TAB) {
                _self.select(tab, index);
              }

              return true;
            }
          });
        }
      });
    });

    this.tabs.changes.subscribe(function (tabs) {
      var _tabs = tabs.toArray();
      
      if (_tabs.indexOf(_self.currentActiveTab.item) > -1) {
        ngxUtils.forEach(_tabs, function (tab, index) {
          if (tab === _self.currentActiveTab.item) {
            _self.currentActiveTab.index = index;
            return true;
          }
        });
      }
      else {
        if (_tabs.length > _self.currentActiveTab.index) {
          _self.currentActiveTab.item = _tabs[_self.currentActiveTab.index];
        }
        else if (_self.currentActiveTab.index >= _tabs.length) {
          _self.currentActiveTab.index = _tabs.length - 1;
          _self.currentActiveTab.item = _tabs[_self.currentActiveTab.index];
        }
        else {
          _self.currentActiveTab = null;
        }
      }

      if (_self.currentActiveTab) { _self.currentActiveTab.item.activate(true); }

    });
  },

  enable: function (tab, isEnabled) {
    if (!tab) { return; }

    tab.enable(isEnabled);
  },

  select: function (tab, index) {
    if (!tab || tab.isDisabled || (this.currentActiveTab && this.currentActiveTab.item === tab)) { return; }

    var _isCanceled = false;
    this.changingTabEmitter.emit({
      id: tab.id,
      cancel: function () { _isCanceled = true; }
    });

    if (_isCanceled) { return; }

    if (this.currentActiveTab) {
      this.currentActiveTab.item.activate(false);

      this.currentActiveTab.index = index;
      this.currentActiveTab.item = tab;
    }
    else {
      this.currentActiveTab = { index: index, item: tab };
    }
    
    this.currentActiveTab.item.activate(true);

    this.changedTabEmitter.emit({
      id: tab.id
    });
  },
  
  trackByTabs: function (index, tab) {
    return tab.id;
  }
});