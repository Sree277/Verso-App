import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.css']
})
export class PoetryComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  poetry: Array<any> = this.bookService.getBooksByCategory("poetry", false);
  pageNumber:number=1;
  nextPage(){
    this.pageNumber=this.pageNumber+1;
    this.poetry= this.bookService.getBookByPageNumber(this.pageNumber);

  }
  prevPage(){
    this.pageNumber=this.pageNumber-1
  }



}
