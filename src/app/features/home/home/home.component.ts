import { Component } from '@angular/core';
import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
    selector:'app-home',
    templateUrl:'home.component.html'
})
export class HomeComponent{
    salesRanges: Array<PoGaugeRanges> = [
        { from: 0, to: 50, label: 'Sales reduction', color: '#c64840' },
        { from: 50, to: 75, label: 'Average sales', color: '#ea9b3e' },
        { from: 75, to: 100, label: 'Sales soared', color: '#00b28e' }
      ];
    
      turnoverRanges: Array<PoGaugeRanges> = [
        { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
        { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
        { from: 75, to: 100, label: 'High rate', color: '#c64840' }
      ];
    
}