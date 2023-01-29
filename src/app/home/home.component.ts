import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  newArrivals: Array<any> = this.bookService.getNewArrivals(true).slice(0, 6);
  favorite: Array<any> = this.bookService.getFavorite(true).slice(0, 6);
  fiction: Array<any> = this.bookService.getBooksByCategory("fiction", true).slice(0, 6);
  under400: Array<any> = this.bookService.getBooksPriceBetween(0, 200, true).slice(0, 6);
  under200: Array<any> = this.bookService.getBooksPriceBetween(200, 400, true).slice(0, 6);
  comboOffer: Array<any> = this.bookService.getBooksByCategory("combo", true).slice(0, 6);
}
