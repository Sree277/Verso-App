import { Component, OnInit } from '@angular/core';
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

  pageNumber:number=1;
  nextPage(){
    this.pageNumber=this.pageNumber+1;

  }
  prevPage(){
    this.pageNumber=this.pageNumber-1
  }
  

}
