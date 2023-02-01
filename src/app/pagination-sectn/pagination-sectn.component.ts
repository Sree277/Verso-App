import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-pagination-sectn',
  templateUrl: './pagination-sectn.component.html',
  styleUrls: ['./pagination-sectn.component.css']
})
export class PaginationSectnComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.lastPageNumber = Math.ceil(this.books.length / this.bookService.numberOfItem);
      this.emitFilteredBooks();
    }, 100)
  }

  pageNumber: number = 1;
  lastPageNumber: number = 1;

  @Input()
  books: Array<any> = [];

  @Output()
  onPageChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.emitFilteredBooks();
  }

  prevPage() {
    this.pageNumber = this.pageNumber - 1;
    this.emitFilteredBooks();
  }

  emitFilteredBooks() {
    let filteredBooks = this.bookService.getBookByPageNumber(this.books, this.pageNumber);
    this.onPageChange.emit(filteredBooks);
  }

}
