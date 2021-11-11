import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";

@Component({
  selector: 'app-line-graphic',
  templateUrl: './bar-graphic.component.html',
  styles: [
  ]
})
export class BarGraphicComponent implements OnInit {

  @Input() vertical: boolean = true;

  @Input() barChartLabels: Label[] = [
    // '2016', '2017', '2018', '2019', '2020', '2021', '2022'
  ];

  @Input() barChartData: ChartDataSets[] = [
    // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#F06C6C', hoverBackgroundColor: 'red'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FA70B5', hoverBackgroundColor: 'red'},
    // {data: [81, 56, 55, 40, 48, 40, 19], label: 'Series C', backgroundColor: '#E371E3', hoverBackgroundColor: 'red'}
  ];

  public barChartOptions: ChartOptions = { responsive: true };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    if( !this.vertical ) {
      this.barChartType = 'horizontalBar';
    }
  }

}
