import { 
  Class, 
  Directive,
  TemplateRef
} from '@angular/core';

import { ngxUtils } from  '../../cores';

import { ngxTooltipService } from './services/tooltip.service';


export var ngxTooltipTemplateDirectiveMetadata = Class({
  constructor: function ngxTooltipTemplateDirectiveMetadata(){
    Object.assign(this, {
      selector: '[ngxTooltipTemplate]',
      inputs: ['id']
    });
  }
});

export var ngxTooltipTemplateDirective = Directive(new ngxTooltipTemplateDirectiveMetadata())
.Class({
  constructor: [
    TemplateRef,
    ngxTooltipService,

    function ngxTooltipTemplateDirective(templateRef, ngxTooltipService) {
      this.templateRef = templateRef;
      this.ngxTooltipService = ngxTooltipService;
    }
  ],

  ngOnInit: function () {
    if(ngxUtils.isEmpty(this.id)){
      throw 'id is required by ngxTooltipTemplateDirective';
    }
    if(ngxUtils.isNull(this.templateRef)){
      throw 'templateRef is required by ngxTooltipTemplateDirective';
    }
    
    this.ngxTooltipService.cacheTemplateRef(this.id, this.templateRef);
  }
});