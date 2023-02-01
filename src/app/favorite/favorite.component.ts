import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  favorite: Array<any> = this.bookService.getFavorite(false);
}
