import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BookSearchboxComponent } from '../book-searchbox/book-searchbox.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(BookSearchboxComponent) bookSearchbox: BookSearchboxComponent | undefined;

  @Input() books: Array<any> = [

  ]

  filteredBooks: Array<any> = [];

  handlePageChange(filteredBooks: Array<any>) {
    this.filteredBooks = filteredBooks;
    this.bookSearchbox?.clearSearch();
  }

  handleSearch(filteredBooks: Array<any>) {
    this.filteredBooks = filteredBooks;
  }

}
