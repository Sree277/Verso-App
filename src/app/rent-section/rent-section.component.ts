import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-rent-section',
  templateUrl: './rent-section.component.html',
  styleUrls: ['./rent-section.component.css']
})
export class RentSectionComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  rentbook: Array<any> = this.bookService.getRentBook(false);
  pageNumber:number=1;
  nextPage(){
    this.pageNumber=this.pageNumber+1;
    this.rentbook= this.bookService.getBookByPageNumber(this.pageNumber);

  }
  prevPage(){
    this.pageNumber=this.pageNumber-1
  }



}
