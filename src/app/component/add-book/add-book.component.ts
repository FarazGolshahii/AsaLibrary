import { BookComponent } from './../dashboard/component/book/book.component';
import { BookDetail } from './models/add-book-data-model';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  listOfAuthor = ['Kyle Loudon', 'Robert Sedgewick'];
  listOfTranslator = ['Thomas Mailund ', 'Dr Brijesh Bakariya'];
  listOfPublisher = ['Mark Weiss', 'Robert Sedgewick'];
  listOfTags = ['sports', 'pdf'];
  isPDF: boolean = false;
  isPaper: boolean = false;
  bookdetail: FormData = new FormData();

  addBookForm1: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(200),
    ]),
    secondaryName: new FormControl(null, [Validators.maxLength(200)]),
    category: new FormControl(null, [Validators.required]),
    edition: new FormControl(null, [Validators.maxLength(20)]),
    author: new FormControl(null, [Validators.required]),
    translator: new FormControl(null),
    bookType: new FormControl(null, [Validators.required]),
    pagesCount: new FormControl(null, [
      Validators.maxLength(10000),
      Validators.pattern('^[0-9]*$'),
    ]),
    publisher: new FormControl(null, [Validators.required]),
    publishDate: new FormControl(null, [Validators.required]),
  });

  addBookForm2 = new FormGroup({
    image: new FormControl(null, [Validators.required]),
    isbn: new FormControl(null, [Validators.maxLength(20)]),
    bookBranch: new FormControl(null),
    bookFile: new FormControl(null),
  });

  addBookForm3 = new FormGroup({
    tags: new FormControl(null),
    attachment: new FormControl(null, [Validators.maxLength(100)]),
    description: new FormControl(null, [Validators.maxLength(2000)]),
  });
  current = 0;
  index: number = 0;
  constructor(private msg: NzMessageService, private fb: FormBuilder) {}
  ngOnInit() {}

  submitForm1() {
    console.log('form1 submited');
    this.next();
  }

  submitForm2() {
    console.log('form2 submited');
    this.next();
  }

  submitForm3() {
    console.log('form3 submited');
    this.bookdetail = {
      ...this.addBookForm1.value,
      ...this.addBookForm2.value,
      ...this.addBookForm3.value,
    };
    console.log(this.bookdetail);
    this.done();
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
    this.current = 0;
    this.index = 0;
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 0;
        break;
      }
      case 1: {
        this.index = 1;
        break;
      }
      case 2: {
        this.index = 2;
        break;
      }
      default: {
        this.index = 3;
      }
    }
  }

  datePickerConfig = {
    drops: 'down',
    format: 'jYYYY/jMM/jDD',
  };
  Index = 0;

  isVisibleMiddle = false;

  onOptionsSelected(value) {
    this.isPaper = false;
    this.isPDF = false;
    for (let i of value) {
      if (i === 'PDF') {
        this.isPDF = true;
      }
      if (i === 'Paper') {
        this.isPaper = true;
      }
    }
  }
  validationForm2() {
    if (  
      this.addBookForm2.controls['bookBranch'].value == null ||
      this.addBookForm2.controls['bookBranch'].value === undefined
    )
      {this.addBookForm2.controls['bookBranch'].valid == false;}
    else  this.addBookForm2.controls['bookBranch'].valid == true;
    
    if (
        this.addBookForm2.controls['bookFile'].value === null ||
        this.addBookForm2.controls['bookFile'].value === undefined
      )
        {this.addBookForm2.controls['bookFile'].valid == false;}
        else  this.addBookForm2.controls['bookFile'].valid == true;

        this.addBookForm2.controls['bookBranch'].markAsDirty;
        this.addBookForm2.controls['bookBranch'].updateValueAndValidity();    
        this.addBookForm2.controls['bookFile'].markAsDirty;
        this.addBookForm2.controls['bookFile'].updateValueAndValidity();

    if(this.addBookForm2.valid==true) return false
    else return true
  }
  // author
  isVisibleAuthor = false;
  showAuthorModal(): void {
    this.isVisibleAuthor = true;
  }
  closeAuthorModal(): void {
    this.isVisibleAuthor = false;
  }
  submitAuthor(data: string) {
    this.listOfAuthor.push(data);
  }

  // translator
  isVisibleTranslator = false;
  showTranslatorModal(): void {
    this.isVisibleTranslator = true;
  }
  closeTranslatorModal(): void {
    this.isVisibleTranslator = false;
  }
  submitTranslator(data: string) {
    this.listOfTranslator.push(data);
  }

  // publisher
  isVisiblePublisher = false;
  showPublisherModal(): void {
    this.isVisiblePublisher = true;
  }
  closePublisherModal(): void {
    this.isVisiblePublisher = false;
  }
  submitPublisher(data: string) {
    this.listOfPublisher.push(data);
  }

  // tags
  isVisibleTags = false;
  showTagsModal(): void {
    this.isVisibleTags = true;
  }
  closeTagsModal(): void {
    this.isVisibleTags = false;
  }
  submitTags(data: string) {
    this.listOfTags.push(data);
  }

  imageList: Array<File>;
  submitImage() {
    this.addBookForm2.controls['image'].setValue(this.imageList);
    console.log(this.addBookForm2.controls['image']);
  }

  submitFile(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.msg.success(`با موفقیت آپلود شد ${info.file.name} فایل `);
      this.addBookForm2.controls['bookFile'].setValue(info.fileList);
    } else if (info.file.status === 'error') {
      this.msg.error(`با مشکل مواجه شد ${info.file.name} آپلود فایل`);
    }
  }
}
