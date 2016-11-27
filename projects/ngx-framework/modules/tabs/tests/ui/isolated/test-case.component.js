import { 
  Component,
  ViewContainerRef 
} from '@angular/core';

import { ngxTabsService } from '../../../../tabs';


export var ngxTestCaseComponent = Component({
  selector: 'ngx-test-case',
  templateUrl: './test-case.html',
})
.Class({
  constructor: [
    ngxTabsService,

    function (ngxTabsService) {
      this.ngxTabsService = ngxTabsService;

      this.tabs = [
        { id: 'tab03', header: 'Tab 03', content: 'this is content of tab 03' },
        { id: 'tab04', header: 'Tab 04', content: 'this is content of tab 04' }
      ];

      this.pillTabs = [
        { id: 'tab03', header: 'Tab 03', content: 'this is content of tab 03' },
        { id: 'tab04', header: 'Tab 04', content: 'this is content of tab 04' }
      ];
    }
  ],

  removeTab: function (tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  },

  removePillTab: function (tab) {
    this.pillTabs.splice(this.pillTabs.indexOf(tab), 1);
  },

  selectTab: function (id) {
    this.ngxTabsService.select(id);
  },

  changedTab: function (event) {
    console.log('changed to tab ' + event.id);
  }
});