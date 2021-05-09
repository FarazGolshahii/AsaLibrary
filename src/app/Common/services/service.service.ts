import { BookList } from './../../component/Interfaces/Booklist';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private dataSource = new BehaviorSubject<BookList[]>([]);
  currentData$ = this.dataSource.asObservable();
  constructor() { }
  bookList:BookList[]=[]
  GetData(BookListData) {
    const bookList: BookList = BookListData;
    // get id
    this.dataSource.next(this.dataSource.value);
  }
}
