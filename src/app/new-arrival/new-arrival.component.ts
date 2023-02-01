import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.newArrivals = this.bookService.getBookByPageNumber(this.newArrivalsFullData, 1);
  }
  newArrivalsFullData: Array<any> = this.bookService.getNewArrivals(false);
  newArrivals: Array<any> = [];

  handlePageChange(pageNumber: number) {
    this.newArrivals = this.bookService.getBookByPageNumber(this.newArrivalsFullData, pageNumber);
  }
}
