import { 
  Class, 
  Directive,
  TemplateRef
} from '@angular/core';

import { ngxUtils } from  '../../cores';

import { ngxPopoverService } from './services/popover.service';


export var ngxPopoverTemplateDirectiveMetadata = Class({
  constructor: function ngxPopoverTemplateDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngxPopoverTemplate]',
      inputs: ['id']
    });
  }
});

export var ngxPopoverTemplateDirective = Directive(new ngxPopoverTemplateDirectiveMetadata())
.Class({
  constructor: [
    TemplateRef,
    ngxPopoverService,

    function ngxPopoverTemplateDirective(templateRef, ngxPopoverService) {
      this.templateRef = templateRef;
      this.ngxPopoverService = ngxPopoverService;
    }
  ],

  ngOnInit: function () {
    if(ngxUtils.isEmpty(this.id)){
      throw 'id is required by ngxPopoverTemplateDirective';
    }
    if(ngxUtils.isNull(this.templateRef)){
      throw 'templateRef is required by ngxPopoverTemplateDirective';
    }
    
    this.ngxPopoverService.cacheTemplateRef(this.id, this.templateRef);
  }
});