import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  classic: Array<any> = this.bookService.getBooksByCategory("classic", true);
}
