import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDto } from '../../service/product.dto';
import { CartItemDto } from '../../service/cart.dto';
import { HttpService } from '../../service/http.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpService, ProductService],
})
export class HomeComponent {
  products: ProductDto[] = [];
  cart: CartItemDto[] = [];

  constructor(
    private readonly httpService: HttpService,
    private readonly cartService: CartService,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
    });

    this.productService.products.subscribe((products) => {
      this.products = products;
    });
    this.httpService.getProducts().subscribe((data: ProductDto[]) => {
      this.products = data;
    });
  }
}
