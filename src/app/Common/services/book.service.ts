import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BookImage } from 'src/app/component/book-details/component/book-images/models/book-images-models';
import { BookDetails, FileType } from 'src/app/component/book-details/models/book-details-data-model';
import { BookRate } from 'src/app/component/book-details/models/bookratedatamodel';
import { LibraryBook } from 'src/app/component/book-details/models/library-book-data-model';
import { RigisterBorrowBook } from 'src/app/component/borrow/models/borrow-book-data-model';

@Injectable({
  providedIn: 'root',
})
export class BookServiceApi {

  bookURL='https://localhost:4200/api/books';
  private tagSearch = new BehaviorSubject<string>(null)
  tagSearchObs = this.tagSearch.asObservable();
  private bookId = new BehaviorSubject<number>(null)
  bookIdObs = this.bookId.asObservable();
  libraryBook:LibraryBook;
  book:BookDetails = {
    id:1,
    name:'اسم کتاب',
    secondryName:'نام دوم کتاب',
    authors:['نویسنده 2','نویسنده 1'],
    translators:['نویسنده 2','نویسنده 1'],
    publisher:'ناشر',
    category:['نویسنده 2','نویسنده 1'],
    edition:'نسخه 1',
    numberOfPage:1000,
    description:'summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary',
    tags:['tag2','tag1'],
    fileType:[2,1],
    fileLink:'../../Common/Image/w3logo.jpg',
    rate:5,
    publishOfDate:'1399/05/02',
    isbn:'1515643156',
    attachment:'سی دی'
  };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  bookImages:BookImage[];
  // postSearchData(){
  //   return this.http.post(DataURL,)
  // }
  constructor( private http: HttpClient) {}

  getBookId(value:number){
    return this.bookId.next(value)
  }
  getTagSearch(value:string){
    return this.tagSearch.next(value);
  }
  
  getBookByIdd(id: number):Observable<BookDetails> {
    debugger
    const url = `getBookByIdd/${this.bookURL}/${id}`;
    return this.http.get<BookDetails>(url)
  }
  
  getBookById(id: number): BookDetails {
    return this.book;
  }


  AddBookBorrows(value: RigisterBorrowBook): Observable<any> {
    const url = `${this.bookURL}/AddBookBorrows`;
    return this.http.post<RigisterBorrowBook>(url, value, this.httpOptions)
    
  }
  AddBookBorrow(value: RigisterBorrowBook): boolean {
    return true;
  }

  InsertRateForBookByBookIds(bookRate: BookRate): Observable<BookRate> {
    const url = `${this.bookURL}/InsertRateForBookByBookIds`;
    return this.http.post<BookRate>(url, bookRate, this.httpOptions)
  }
  InsertRateForBookByBookId(bookRate: BookRate): boolean {
    return true;
  }
 
  getBookListData()
  {
    this.http.get(this.bookURL).subscribe(data=>{
      console.log(data);
    })
  }
    

  getLibraryBookWithBookIds(bookId:number):Observable<LibraryBook>{
    const url = `${this.bookURL}/getLibraryBookWithBookId/${bookId}`;
    return this.http.get<LibraryBook>(url)
  }

  getLibraryBookWithBookId(bookId:number){
    return this.libraryBook = {
      bookId : 1,
      numberInKaraj :1,
      numberInTehran : 1
    }
  }

  getImagesByBookId(bookId:number):Observable<BookImage[]>{
    const url = `${this.bookURL}/getLibraryBookWithBookId/${bookId}`;
    return this.http.get<BookImage[]>(url)
  }

  private log(message: string){ 
    //this.messageService.add(`HeroService: ${message}`);
  }
  
  
}
