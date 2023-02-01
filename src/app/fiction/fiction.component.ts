import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']

})
export class FictionComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  fiction: Array<any> = this.bookService.getBooksByCategory("fiction", false);
  pageNumber: number = 1;
  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.fiction = this.bookService.getBookByPageNumber(this.fiction, this.pageNumber);

  }
  prevPage() {
    this.pageNumber = this.pageNumber - 1
  }



}
