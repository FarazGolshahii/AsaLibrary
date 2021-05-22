import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-piechart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  loading = true;
  public pieChartLabels = ['روانشناسی', 'کامپیوتری', 'علمی', 'سرگرمی', 'فنی'];
  public pieChartData = [60, 50, 50, 50, 100];
  public pieChartType = 'pie';
  public barChartLabels = ['روانشناسی', 'کامپیوتری', 'علمی', 'سرگرمی', 'فنی'];
  public barChartData = [65, 59, 80, 81, 56, 55, 40];
  public barChartType = 'bar';

  public donutColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],

      borderWidth: 1
    }
  ];
  public pieChartLegend = true;
  public barChartLegend = false;
  public pieChartOptions: ChartOptions = {
    responsive: true
  };


  constructor() {

  }
  ngOnInit() {

  }
}