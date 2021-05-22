
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'jalali-moment';
import { BookServiceApi } from 'src/app/Common/services/book.service';
import { LibraryBook, LibraryType } from '../book-details/models/library-book-data-model';
import { OptionalOptions, RigisterBorrowBook } from './models/borrow-book-data-model';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  borrowForm!: FormGroup;
  borrowBook: RigisterBorrowBook
  bookId: number;
  @Input() selectInBorrow: LibraryBook;
  @Input() branchType: string;
  @Output('changeVisible') close: EventEmitter<boolean> = new EventEmitter<boolean>();
  datePickerConfig = {
    drops: 'down',
    format: 'jYYYY/jMM/jDD'
  }
  validMessage: boolean = false;
  Message: string;
  optionalOptions: OptionalOptions;
  branchDefault: OptionalOptions;


  constructor(private fb: FormBuilder, private bookService: BookServiceApi) { }

  submitForm(): void {

    this.borrowBook = {
      bookId: this.bookId,
      userId: 5,
      branch: this.borrowForm.value['branch'],
      startDate: moment.from(this.borrowForm.value['startDate'], 'fa', 'jYYYY/jMM/jDD').format('YYYY/MM/DD'),
      estimateDate: moment.from(this.borrowForm.value['estimateDate'], 'fa', 'jYYYY/jMM/jDD').format('YYYY/MM/DD')
    }
    debugger

    this.validMessage = this.bookService.AddBookBorrow(this.borrowBook)
    if (this.validMessage == true) {
      this.close.emit(false)
    }
  }
  ngOnInit(): void {
    this.bookService.bookIdObs.subscribe(res => this.bookId = res)
    this.libraryOptionalOptions(this.branchType)
    this.branchDefault = this.optionalOptions
    this.borrowForm = this.fb.group({
      branch: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      estimateDate: [null, [this.estimateDateValidator]]

    });
    this.borrowForm.controls.branch.setValue(this.branchDefault.value);

  }
  // validateConfirmPassword(): void {
  //   setTimeout(() => this.borrowForm.controls.estimateDate.updateValueAndValidity());
  // }
  estimateDateValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value <= this.borrowForm.controls.startDate.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  libraryOptionalOptions(branchType: string) {
    if (branchType == 'کرج') {
      this.optionalOptions =
        { value: LibraryType.karaj, viewValue: 'کرج' }
    } else if (branchType == 'تهران') {
      this.optionalOptions =
        { value: LibraryType.tehran, viewValue: 'تهران' }
    }
  }

}
