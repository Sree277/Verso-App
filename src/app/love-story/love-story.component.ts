import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-love-story',
  templateUrl: './love-story.component.html',
  styleUrls: ['./love-story.component.css']
})
export class LoveStoryComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  love_story: Array<any> = this.bookService.getBooksByCategory("love_story", false);
}
