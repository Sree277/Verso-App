import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-story-childrens',
  templateUrl: './story-childrens.component.html',
  styleUrls: ['./story-childrens.component.css']
})
export class StoryChildrensComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  
 childrens_story: Array<any> = this.bookService.getBooksByCategory("childrens_story", true);


}
