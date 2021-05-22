import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { BookComment } from '../models/book-comment-data-model';
import { Comment } from '../models/comment-data-model';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceApi {

  commentUrl='api/comment';
  bookComment:Observable<BookComment>;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  InsertComment(comment:Comment){
    return comment;
  }

  insertcomments(comment:Comment):Observable<Comment>{
    const url = `${this.commentUrl}/insertcomments`;
    return this.http.post<Comment>(url, comment, this.httpOptions).pipe(
      catchError(this.handleError<Comment>("insertcomments"))
    )
  }

  getAllCommentByBookIds(bookId:number):Observable<BookComment[]>{
    const url = `${this.commentUrl}/getAllCommentByBookIds`;
    return this.http.get<BookComment>(url).pipe(
      catchError(this.handleError<BookComment[]>("getAllCommentByBookIds"))
    )
  }

  getAllCommentByBookId(bookId:number):Observable<BookComment>{
    return this.bookComment;
  }


  private handleError<T>(operation = 'operation'):any {
    (error: any) => {
      return console.log(operation +': '+ error); // log to console instead
    };
  }
}
