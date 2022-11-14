import { Component, OnInit,   HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-iconpart',
  templateUrl: './iconpart.component.html',
  styleUrls: ['./iconpart.component.css']
})
export class IconpartComponent implements OnInit {
  constructor () {
   }
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1140: {
        items: 5
      },
      1340: {
        items: 6
      }
    },
    nav: true
  }

}
