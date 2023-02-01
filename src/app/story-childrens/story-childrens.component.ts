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

  childrens_story: Array<any> = this.bookService.getBooksByCategory("childrens_story", false);

  pageNumber: number = 1;
  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.childrens_story = this.bookService.getBookByPageNumber(this.childrens_story, this.pageNumber);

  }
  prevPage() {
    this.pageNumber = this.pageNumber - 1
  }



}
