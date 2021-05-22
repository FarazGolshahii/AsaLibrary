import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  isCollapsed :boolean =  false;
  constructor(private router:Router) { }
  isactive=true;
  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/search']);
  }
}
