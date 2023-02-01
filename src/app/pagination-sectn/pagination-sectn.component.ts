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
  }

  pageNumber: number = 1;

  @Input()
  lastPageNumber: number = 1;

  @Output()
  onPageChange: EventEmitter<number> = new EventEmitter<number>();

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.onPageChange.emit(this.pageNumber);
  }

  prevPage() {
    this.pageNumber = this.pageNumber - 1;
    this.onPageChange.emit(this.pageNumber);
  }


}
