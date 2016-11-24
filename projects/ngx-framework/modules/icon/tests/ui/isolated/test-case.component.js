import { Component } from '@angular/core';

import { ngxIconService } from '../../../../icon';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: [
    ngxIconService, 
    
    function (ngxIconService) {
      ngxIconService.setDefaultFontSet('material-icons');

      ngxIconService.setSvgIcon('/icon/svgs/favorite.svg', 'favorite');

      ngxIconService.setSvgIcon('/icon/svgs/face.svg', 'face', 'face-set');

      ngxIconService.setSvgIconSet('/icon/svgs/material-set.svg');

      this.svg_face = '/icon/svgs/face.svg';
    }
  ],

  click: function (event) {
    console.log('clicked');
  }
});