import { Component, OnInit } from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutColors: Color[] = [
    {
      backgroundColor: [
        '#88F268', '#86FCA2', '#6EE6BE', '#6DF0FC', '#55A6F2'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
