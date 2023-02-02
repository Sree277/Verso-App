import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  searchText: string = "";

  @Input()
  books: Array<any> = [];

  @Output()
  onSearch: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  searchBooks() {
    let filteredBooks = this.bookService.getBookSearchResult(this.books, this.searchText);
    this.onSearch.emit(filteredBooks);
  }

  clearSearchBox() {
    this.searchText = '';
  }

  clearSearch() {
    this.clearSearchBox();
    let filteredBooks = this.bookService.getBookByPageNumber(this.books, 1);
    this.onSearch.emit(filteredBooks);
  }

  sortHighToLow() {
    this.searchText = '';
  }

  sortLowToHigh() {
    this.searchText = '';
  }
}
