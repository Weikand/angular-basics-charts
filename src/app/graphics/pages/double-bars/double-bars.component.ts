import {Component} from '@angular/core';
import {ChartDataSets} from "chart.js";

@Component({
  selector: 'app-double-lines',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {
  dataProvider: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Seller A' },
    { data: [ 50,250,30, 450,200 ], label: 'Seller B' },
  ];

  labelProvider: string[] = ['2021', '2022','2023','2024','2025'];

  dataProduct: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 110 ], label: 'Cars', backgroundColor: 'blue' },
  ];

}
