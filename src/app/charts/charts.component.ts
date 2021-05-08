import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  public pieChartLabels = ['Sales Q1', 'Sales Q2','Sales Q5', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90,88];
  public pieChartType = 'pie';
  // public pieChartColors = ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)','rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'];
  ngOnInit(): void {
  }

}
