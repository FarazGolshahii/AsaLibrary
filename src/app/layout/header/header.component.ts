import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { BookServiceApi } from 'src/app/Common/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  searchValue:string="";
  searchCheckboxItem=[
    {label:"نام کـتاب",value:"name",checked:true },
    {label:"موضوع کـتاب",value:"category",checked:true },
    {label:"نام نویسنده",value:"author",checked:true },
  ]
  inputValue?: string;
  
  options: string[] = [];

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value.length>=3) {
      this.options = value ? [value, value + "Book", value + value + " "+ value] : [];      
    }
  }
 
  constructor(private route:Router,private bookService:BookServiceApi) { }

  ngOnInit(): void {
    this.bookService.tagSearchObs.subscribe(res => this.inputValue = res)
  }
  searchClick(){
    debugger
    this.searchValue=this.inputValue
    this.route.navigate(['/search'])
    console.log(this.searchValue);
  }
  log(){
    console.log(this.searchCheckboxItem);  
  }


}
