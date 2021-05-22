import { Component, OnInit } from '@angular/core';
import { BorrowBook, BorrowStatus } from './models/activity-data-model';
import { BorrowServiceApi } from '../borrow/services/borrow.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {


  aValue: BorrowBook;
  bValue: BorrowBook;
  searchValue = '';
  visible = false;
  borrow: any;
  message: string;
  isVisible: boolean = false;
  isAlert: boolean = false;
  pageIndex: number = 1;
  total: number = 7;
  pageSize: number = 3;
  borrowBooks: BorrowBook[] = [
    {
      borrowId: 1,
      bookName: 'bookName1',
      authors: ['author1', 'author2'],
      categories: ['category1', 'category2'],
      startDate: '1400/01/01',
      estimateDate: '1400/2/1',
      endDate: '1400/3/1',
      status: BorrowStatus.delivered
    },
    {
      borrowId: 2,
      bookName: 'bookName2',
      authors: ['author1', 'author2'],
      categories: ['category1', 'category2'],
      startDate: '1400/01/15',
      estimateDate: '1400/2/1',
      endDate: '1400/3/1',
      status: BorrowStatus.delivered
    },
    {
      borrowId: 3,
      bookName: 'bookName3',
      authors: ['author1', 'author2'],
      categories: ['category1', 'category2'],
      startDate: '1400/01/13',
      estimateDate: '1400/2/1',
      endDate: '1400/3/1',
      status: BorrowStatus.delivered
    },
    {
      borrowId: 4,
      bookName: 'bookName4',
      authors: ['author1', 'author2'],
      categories: ['category1', 'category2'],
      startDate: '1400/01/14',
      estimateDate: '1400/2/1',
      endDate: '-',
      status: BorrowStatus.notDeliverd
    },
    {
      borrowId: 5,
      bookName: 'bookName5',
      authors: ['author1', 'author2'],
      categories: ['category1', 'category2'],
      startDate: '1400/01/15',
      estimateDate: '1400/2/1',
      endDate: '1400/3/1',
      status: BorrowStatus.delivered
    },
    {
      borrowId: 6,
      bookName: 'bookName1',
      authors: ['author1', 'author2'],
      categories: ['category1', 'category2'],
      startDate: '1400/01/01',
      estimateDate: '1400/2/1',
      endDate: '1400/3/1',
      status: BorrowStatus.delivered
    },
  ];
  selectedBookId: number;


  sortAction = (a: BorrowBook, b: BorrowBook) => a.status - b.status;

  compare = (a: BorrowBook, b: BorrowBook, c: string) => {
    this.listOfDisplayData.sort(function (a, b) {
      debugger

      var aValue = a.startDate.split('/').join('');
      var bValue = b.startDate.split('/').join('');
      if (c == "ascend") {
        var n = aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      }
      else {
        var n = aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
      return n
      // return a.localeCompare(b);         // <-- alternative 
    });
  }


  listOfDisplayData: BorrowBook[];
  delivery: string
  changeDeliveryStatus: boolean;

  constructor(private modal: NzModalService, private borrowService: BorrowServiceApi) {

  }

  ngOnInit(): void {

    this.listOfDisplayData = this.borrowBooks;
    debugger
    //this.borrowService.getAllBorrowBookByUserIdAndPageIndex(userId,1)
    //this.borrowBooks = this.borrowService.getAllBorrowBookByUserId(1)
  }


  buttonDisabled(value: number) {
    switch (value) {
      case BorrowStatus.delivered:
        return false;
      case BorrowStatus.notDeliverd:
        return true;
    }
  }

  showModal(value: number): void {
    debugger
    this.selectedBookId = value;
    this.isVisible = true;
  }

  handleOk(borrowId: number): void {
    debugger

    this.changeDeliveryStatus = this.borrowService.updateBorrowByBorrowId(borrowId);
    if (this.changeDeliveryStatus) {
      if (borrowId == 4) {
        this.borrowBooks = [
          {
            borrowId: 1,
            bookName: 'bookName1',
            authors: ['author1', 'author2'],
            categories: ['category1', 'category2'],
            startDate: '1400/01/01',
            estimateDate: '1400/2/1',
            endDate: '1400/3/1',
            status: BorrowStatus.delivered
          },
          {
            borrowId: 2,
            bookName: 'bookName2',
            authors: ['author1', 'author2'],
            categories: ['category1', 'category2'],
            startDate: '1400/01/15',
            estimateDate: '1400/2/1',
            endDate: '1400/3/1',
            status: BorrowStatus.delivered
          },
          {
            borrowId: 3,
            bookName: 'bookName3',
            authors: ['author1', 'author2'],
            categories: ['category1', 'category2'],
            startDate: '1400/01/13',
            estimateDate: '1400/2/1',
            endDate: '1400/3/1',
            status: BorrowStatus.delivered
          },
          {
            borrowId: 4,
            bookName: 'bookName4',
            authors: ['author1', 'author2'],
            categories: ['category1', 'category2'],
            startDate: '1400/01/14',
            estimateDate: '1400/2/1',
            endDate: '1400/2/1',
            status: BorrowStatus.delivered
          },
          {
            borrowId: 5,
            bookName: 'bookName5',
            authors: ['author1', 'author2'],
            categories: ['category1', 'category2'],
            startDate: '1400/01/15',
            estimateDate: '1400/2/1',
            endDate: '1400/3/1',
            status: BorrowStatus.delivered
          },
          {
            borrowId: 6,
            bookName: 'bookName1',
            authors: ['author1', 'author2'],
            categories: ['category1', 'category2'],
            startDate: '1400/01/01',
            estimateDate: '1400/2/1',
            endDate: '1400/3/1',
            status: BorrowStatus.delivered
          },
        ];
      }

    }

    this.listOfDisplayData = this.borrowBooks
    this.isVisible = false;
    this.isAlert = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  afterClose(): void {
    console.log('close');
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.borrowBooks.filter((item: BorrowBook) => item.bookName.indexOf(this.searchValue) !== -1);
  }

  nameFilterFn = (list: string[], item: BorrowBook) => list.some(
    name => item.status.toString().indexOf(name) !== -1);
  filterName = [
    { text: 'تحویل داده شده', value: '1' },
    { text: 'تحویل داده نشده', value: '0' }
  ];


  getBookByUserIdAndPageNumber(pageIndex: number) {
    var userId = 1;
    this.borrowService.getAllBorrowBookByUserIdAndPageIndex(userId, pageIndex)

  }

}
