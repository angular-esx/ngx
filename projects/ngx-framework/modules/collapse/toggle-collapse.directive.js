import { 
  Class, 
  Directive 
} from '@angular/core';

import { ngxUtils } from  '../../cores';

import { ngxCollapseService } from './services/collapse.service';


export var ngxToggleCollapseDirectiveMetadata = Class({
  constructor: function ngxToggleCollapseDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngx-toggle-collapse]',
      inputs: ['id: ngx-toggle-collapse'],
      host: {
        '(click)': 'toggle()'
      }
    });
  }
});

export var ngxToggleCollapseDirective = Directive(new ngxToggleCollapseDirectiveMetadata())
.Class({
  constructor: [
    ngxCollapseService,

    function ngxToggleCollapseDirective(ngxCollapseService) {
      this.ngxCollapseService = ngxCollapseService;
    }
  ],

  toggle: function () {
    this.ngxCollapseService.toggle(this.id);
  }
});