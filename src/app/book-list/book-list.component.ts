import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BookFilterComponent } from '../book-filter/book-filter.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.hidePaging) { this.filteredBooks = this.books; }
  }
  @ViewChild(BookFilterComponent) bookFilter: BookFilterComponent | undefined;

  @Input() books: Array<any> = [

  ]

  @Input() hidePaging: boolean = false;


  filteredBooks: Array<any> = [];

  handlePageChange(filteredBooks: Array<any>) {
    this.filteredBooks = filteredBooks;
    this.bookFilter?.clearSearchBox();
  }

  handleSearch(filteredBooks: Array<any>) {
    this.filteredBooks = filteredBooks;
  }

}
