import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() isCollapsed = false;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  inputValue?: string;
  searchValue:string=""
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value.length>=3) {
      this.options = value ? [value, value + "Book", value + value + " "+ value] : [];      
    }
  }
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  Onclick(){
    this.searchValue=this.inputValue
    this.route.navigate(['/search'])
    console.log(this.searchValue);
  }
}
