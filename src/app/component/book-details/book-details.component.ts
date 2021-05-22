import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalButtonOptions, NzModalService } from 'ng-zorro-antd/modal';
import { BookServiceApi } from 'src/app/Common/services/book.service';
import { BookDetails, FileType } from './models/book-details-data-model';
import { BookRate } from './models/bookratedatamodel';
import { LibraryType, LibraryBook } from './models/library-book-data-model';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookdetailsComponent implements OnInit {

  bookInfo: BookDetails;
  bookId: number;
  bookRate: BookRate;
  showBookType: string;
  libraryBook: LibraryBook;
  krjAndThrn = false;
  krj = false;
  thrn = false;
  anyThing = false;
  libraryInBorrow: number[];
  libraryType: string;
  //for modal
  isVisibleMiddle = false;
  isVisibleMiddleRate = false;
  //for rate
  tooltips = ['خیلی بد', 'بد', 'متوسط', 'خوب', 'عالی'];
  rateValue = 5;
  //popover
  visible: boolean = false;


  constructor(private bookService: BookServiceApi, private route: ActivatedRoute, private modalService: NzModalService) { }

  ngOnInit(): void {
    //id bring with route
    this.bookId = +this.route.snapshot.params.bookId;
    this.bookInfo = this.bookService.getBookById(this.bookId);
    //this.bookService.getBookByIdd(this.bookId).subscribe();
    this.bookService.getBookId(this.bookInfo.id);
    this.libraryBook = this.bookService.getLibraryBookWithBookId(this.bookId);
  }

  //for modal
  showModalMiddle(value: string): void {
    this.libraryType = value;
    this.isVisibleMiddle = true;
  }

  showModalMiddleRate(): void {
    this.isVisibleMiddleRate = true;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleCancelMiddleRate(): void {
    this.isVisibleMiddleRate = false;
  }

  change(value: boolean): void {
  }
  modalVisible(value) {
    this.isVisibleMiddle = value;
  }
  //popover
  clickMe(): void {
    this.visible = false;
  }

  handleOkMiddleRate(): void {
    this.bookRate = {
      BookId: this.bookId,
      Rate: this.rateValue
    }
    this.bookService.InsertRateForBookByBookId(this.bookRate);
    this.isVisibleMiddleRate = false;
  }

  buttonDisabled(value: number[]) {

    if (value.findIndex(x => x == FileType.pdf) != -1) {
      return false;
    }
    return true;
  }
  showFileType(value: number[]) {
    if (value.findIndex(x => x == FileType.pdf) != -1 && value.findIndex(x => x == FileType.print) != -1) {
      this.showBookType = ' pdf , چاپی'
      return this.showBookType;
    }
    else if (value.findIndex(x => x == FileType.pdf) != -1) {
      this.showBookType = 'pdf'
      return this.showBookType;
    }
    else {
      this.showBookType = 'چاپی'
      return this.showBookType;
    }
  }

  existLibraryBook(libraryBook: LibraryBook) {
    if (libraryBook.numberInKaraj > 0 && libraryBook.numberInTehran > 0) {
      return this.krjAndThrn = true;
    } else if (libraryBook.numberInTehran > 0) {
      return this.thrn = true;
    } else if (libraryBook.numberInKaraj > 0) {
      return this.krj = true;
    }
    else {
      return this.anyThing = true
    }
  }

  tagSearch(value: string) {
    this.bookService.getTagSearch(value);
  }


}
