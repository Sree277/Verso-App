import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-searchbox',
  templateUrl: './book-searchbox.component.html',
  styleUrls: ['./book-searchbox.component.css']
})
export class BookSearchboxComponent implements OnInit {

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

  clearSearch() {
    this.searchText = '';
  }

}
