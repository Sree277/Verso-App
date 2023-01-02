import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books: Array<any> = [
    {
      "name":"book1",
      "author":"author1",
      "bookImage":"book1.webp"  
    },
    {
        "name":"book2",
        "author":"author2",
        "bookImage":"book2.jpg"  
    },
    {
        "name":"book3",
        "author":"author3",
        "bookImage":"book3.jpg"
    },
    {
      "name":"book4",
      "author":"author4",
      "bookImage":"book4.jpg"   

    },
    {
      "name":"book5",
      "author":"author5",
      "bookImage":"book5.jpg"   

    },
    {
      "name":"book6",
      "author":"author6",
      "bookImage":"book6.jpg"   

    },
    {
      "name":"book7",
      "author":"author",
      "bookImage":"book7.jpg"   

    },
    {
      "name":"book8",
      "author":"author8",
      "bookImage":"book8.jpg"   

    },
    {
      "name":"book9",
      "author":"author9",
      "bookImage":"book9.jpg"   

    },
    {
      "name":"book10",
      "author":"author10",
      "bookImage":"book10.jpg"   

    },
    {
      "name":"book11",
      "author":"author11",
      "bookImage":"book11.jpg"   

    },
    {
      "name":"book12",
      "author":"author12",
      "bookImage":"book12.jpg"   

    },
    {
      "name":"book13",
      "author":"author13",
      "bookImage":"book13.jpg"   

    },
    {
      "name":"book14",
      "author":"author14",
      "bookImage":"book14jpg"   

    },
    {
      "name":"book15",
      "author":"author15",
      "bookImage":"book15.jpg"   

    },
    {
      "name":"book16",
      "author":"author16",
      "bookImage":"book16.jpg"   

    },
    {
      "name":"book17",
      "author":"author17",
      "bookImage":"book17.jpg"   

    },
    {
      "name":"book18",
      "author":"author18",
      "bookImage":"book18.jpg"   

    },
    {
      "name":"book19",
      "author":"author19",
      "bookImage":"book19.jpg"   

    }
  ]

}
