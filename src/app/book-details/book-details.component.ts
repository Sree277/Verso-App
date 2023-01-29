import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }
  bookDetails: any = window.history.state.book;
  addtoCart() {
    this.cartService.addToCart(this.bookDetails.bookId, 1);
    alert("Book added to cart");
    setTimeout(() => {
      this.router.navigate(['/addtoCart']);
    });
  }
}
