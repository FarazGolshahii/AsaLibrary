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
  constructor() {}
  ngOnInit() {  
    
  };
}
