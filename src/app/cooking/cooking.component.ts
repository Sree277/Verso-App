import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})
export class CookingComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  cooking: Array<any> = this.bookService.getBooksByCategory("cooking", true);


}
