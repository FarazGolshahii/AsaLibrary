import { Router } from '@angular/router';
import { BookList } from '../../../book-list/models/book-list-data-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() item: BookList;
  isEnter:boolean=false;
  mouseEnter(){
    this.isEnter=!this.isEnter;
 }

  constructor(private route:Router) { }
  log(){
    this.route.navigate(['/bookdetails/:bookId'])
  }
  ngOnInit(): void {
  }

}
