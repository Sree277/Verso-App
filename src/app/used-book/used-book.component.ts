import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-used-book',
  templateUrl: './used-book.component.html',
  styleUrls: ['./used-book.component.css']
})
export class UsedBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
    
  usedBook: Array<any> = this.bookService.getUsedBook(false);
  pageNumber:number=1;
  nextPage(){
    this.pageNumber=this.pageNumber+1;
    this.usedBook= this.bookService.getBookByPageNumber(this.pageNumber);

  }
  prevPage(){
    this.pageNumber=this.pageNumber-1
  }



}
