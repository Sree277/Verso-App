import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() books: Array<any> = [

  ]

  filteredBooks: Array<any> = [];

  handlePageChange(filteredBooks: Array<any>) {
    this.filteredBooks = filteredBooks;
  }

}
