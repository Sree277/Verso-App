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
  pageNumber:number=1;
  nextPage(){
    this.pageNumber=this.pageNumber+1;
    this.cooking= this.bookService.getBookByPageNumber(this.pageNumber);

  }
  prevPage(){
    this.pageNumber=this.pageNumber-1
  }



}
