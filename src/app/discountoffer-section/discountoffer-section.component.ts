import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-discountoffer-section',
  templateUrl: './discountoffer-section.component.html',
  styleUrls: ['./discountoffer-section.component.css']
})
export class DiscountofferSectionComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  newOffer: Array<any> = this.bookService.getNewOffer(false);
  under400: Array<any> = this.bookService.getBooksPriceBetween(0, 200, false);
  under200 :  Array<any> = this.bookService.getBooksPriceBetween(200,400, false);
  comboOffer: Array<any> = this.bookService.getBooksByCategory("combo", false);

   conmp: Array<any>=[
   
  
  ]

}
