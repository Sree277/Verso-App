import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItemCount.subscribe(count => this.cartItemCount = count);
  }

  cartItemCount: number = 0;

}
