import {Component, OnInit} from '@angular/core';
import {GraphicsService} from "../../services/graphics.service";
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [

  ];
  public doughnutChartData: MultiDataSet = [

  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutColors: Color[] = [
    {
      backgroundColor: [
        '#1505F5', '#F51101', '#0ce007', '#6DF0FC', '#F55AE0'
      ]
    }
  ]

  constructor(private chartService: GraphicsService) { }

  ngOnInit(): void {
    // this.chartService.getSocialMediaUsersInBillions()
    //   .subscribe( data => {
    //     this.doughnutChartLabels = Object.keys(data);
    //     this.doughnutChartData.push(Object.values(data));
    //   })


    this.chartService.getSocialMediaUsersInBillionsForDoughnut()
      .subscribe( ({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );
      })

  }

}
