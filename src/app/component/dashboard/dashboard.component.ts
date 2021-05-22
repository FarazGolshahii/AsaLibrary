
import { BookList } from './models/book-list-data-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  bookList: BookList[] = [
    {
      id:1,
      name: 'Mastering Algorithms with C: Useful Techniques from Sorting to Encryption',
      category: ['Sports','History','Medical Books'],
      author: ['Mark A. Weiss', ' Robert Sedgewick '],
      rate: 4,
      imgSrc: 'https://m.media-amazon.com/images/I/71-sAW8H9RL._AC_UY218_.jpg',
    },
    {
      id:2,
      name: 'Algorithms in C, Parts 1-5 (Bundle): Fundamentals, Data Structures, Sorting, Searching, and Graph Algorithms',
      category: ['science','Business & Money','Children'],
      author: ['Kyle Loudon'],
      rate: 5,
      imgSrc: 'https://m.media-amazon.com/images/I/51+a0Bec5wL._AC_UY218_.jpg',
    },
    {
      id:3,
      name: 'Algorithms in C, Parts 1-4: Fundamentals, Data Structures, Sorting, Searching  ',
      category: ['chemistery','Arts & Photography','Business & Money'],
      author: ['Kyle Loudon', 'Mark A. Weiss', "Robert Sedgewick" ],
      rate: 2,
      imgSrc: 'https://m.media-amazon.com/images/I/41XKeoPrNXL._AC_UY218_.jpg',
    },
    {
      id:4,
      name: 'Data Structures and Algorithm Analysis in C (2nd Edition)',
      category: ['programming','Romance'],
      author: ['aarg', 'wegg'],
      rate: 3,
      imgSrc: 'https://m.media-amazon.com/images/I/410K3XZZ29L._AC_UY218_.jpg',
    },
    {
      id:5,
      name: 'Mastering Algorithms with C: Useful Techniques from Sorting to Encryption',
      category: ['Sports','History','Medical Books'],
      author: ['Mark A. Weiss', ' Robert Sedgewick '],
      rate: 4,
      imgSrc: 'https://m.media-amazon.com/images/I/71-sAW8H9RL._AC_UY218_.jpg',
    },
    {
      id:6,
      name: 'Algorithms in C, Parts 1-5 (Bundle): Fundamentals, Data Structures, Sorting, Searching, and Graph Algorithms',
      category: ['science','Business & Money','Children'],
      author: ['Kyle Loudon'],
      rate: 5,
      imgSrc: 'https://m.media-amazon.com/images/I/51+a0Bec5wL._AC_UY218_.jpg',
    },
    {
      id:7,
      name: 'C# in Depth: Fourth Edition',
      category: ['technologhy','Business & Money'],
      author: ['Jon Skeet'],
      rate: 3,
      imgSrc: 'https://m.media-amazon.com/images/I/71aQeDLFSfL._AC_UY218_.jpg',
    },
    {
      id:8,
      name: 'Algorithms in C, Parts 1-5 (Bundle): Fundamentals, Data Structures, Sorting, Searching, and Graph Algorithms',
      category: ['science','Business & Money','Children'],
      author: ['Kyle Loudon'],
      rate: 5,
      imgSrc: 'https://m.media-amazon.com/images/I/71aQeDLFSfL._AC_UY218_.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
    
    }

}
