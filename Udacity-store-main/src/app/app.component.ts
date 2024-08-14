import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { CartItemDto } from './service/cart.dto';
import { CartService } from './service/cart.service';
import { HttpService } from './service/http.service';
import { OrderService } from './service/order.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpService, CartService, OrderService],
})

export class AppComponent implements OnInit {
  cart: CartItemDto[] = [];
  cartLength: number = this.cart?.reduce((cur, next) => {
    return cur + next.quantity;
  }, 0);
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
    });
  }
}
