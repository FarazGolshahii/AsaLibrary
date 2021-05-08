import { HeaderComponent } from './layout/header/header.component';
import { Component } from '@angular/core';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  isCollapsed = false;
  title="choose a date";
  minDate: object = {};

  constructor() {}
  public pieChartLabels = ['Sales Q1', 'Sales Q2','Sales Q5', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90,88];
  public pieChartType = 'pie';
  ngOnInit() {  
    this.minDate = moment('1395-11-22', 'jYYYY,jMM,jDD');
    
  };
  datePickerConfig = {
    drops: 'down',
    opens:'right',
    format: 'YY/MM/DD',
    onOpenDelay:'0',
}
toggleCollapsed(): void {
  this.isCollapsed = !this.isCollapsed;
}
}
