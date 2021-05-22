import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BorrowBook, BorrowStatus } from '../../activity/models/activity-data-model';

@Injectable({
  providedIn: 'root'
})
export class BorrowServiceApi {

  borrowUrl='api/borrow';
  borrowBooks:BorrowBook[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  updateBorrowByBorrowIds(borrowId:number):Observable<BorrowBook>{
    const url = `${this.borrowUrl}/updateBorrowByBorrowIds`;
    return this.http.put<BorrowBook>(url, borrowId,this.httpOptions).pipe(
      catchError(this.handleError<BorrowBook>("updateBorrowByBorrowIds"))
    )
  }
  updateBorrowByBorrowId(borrowId:number){
    return true;
  }

  getAllBorrowBookByUserIds(userId:number): Observable<BorrowBook[]>{
    const url = `${this.borrowUrl}/getAllBorrowBookByUserIds`;
    return this.http.get<BorrowBook[]>(url).pipe(
      catchError(this.handleError<BorrowBook[]>("getAllBorrowBookByUserIds"))
    )
  }

  getAllBorrowBookByUserId(userId:number): BorrowBook[]{
    return this.borrowBooks;
  }

  getAllBorrowBookByUserIdAndPageIndexs(userId:number, pageIndex:number):Observable<BorrowBook[]>{
    const url = `${this.borrowUrl}/${userId}/${pageIndex}`;
    return this.http.get<BorrowBook[]>(url).pipe(
      catchError(this.handleError<BorrowBook[]>("getAllBorrowBookByUserIdAndPageIndexs"))
    )
  }

  getAllBorrowBookByUserIdAndPageIndex(userId:number, pageIndex:number){
    return  this.borrowBooks;
  }

  private handleError<T>(operation = 'operation'):any {
    (error: any) => {
      return console.log(operation +': '+ error); // log to console instead
    };
  }
}
