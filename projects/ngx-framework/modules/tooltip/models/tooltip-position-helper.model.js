import { Class } from '@angular/core';


export var ngxTooltipPositionHelper = Class({
  constructor: function(document){
    if(!document){ throw 'document is required by ngxTooltipPositionHelper'; }

    this.document = document;
  },

  getRect: function(nativeElement){
    var _boundingClientRect = nativeElement.getBoundingClientRect();

    return {
      width: _boundingClientRect.width || nativeElement.offsetWidth,
      height: _boundingClientRect.height || nativeElement.offsetHeight,
      top: _boundingClientRect.top + this.document.body.scrollTop,
      left: _boundingClientRect.left + this.document.body.scrollLeft
    };
  },

  shiftWidth: function(hostElementRect, elementRect, position) {
    switch (position) {
      case 'left':
        return hostElementRect.left;
      case 'right':
        return hostElementRect.left + hostElementRect.width;
      case 'center':
        return  hostElementRect.left + hostElementRect.width / 2 - elementRect.width / 2;
    }
  },

  shiftHeight: function(hostElementRect, elementRect, position) {
    switch (position) {
      case 'top':
        return hostElementRect.top;
      case 'bottom':
        return hostElementRect.top + hostElementRect.height;
      case 'center':
        return hostElementRect.top + hostElementRect.height / 2 - elementRect.height / 2;
    }
  }
});