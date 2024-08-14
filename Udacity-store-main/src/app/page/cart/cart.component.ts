import { OrderService } from './../../service/order.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartItemDto } from '../../service/cart.dto';
import { CartService } from '../../service/cart.service';
import { CartTableComponent } from './cart-table/cart-table.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import { SubmitCreateOrderForm } from '../../service/form';
import { OrderDto } from '../../service/order.dto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SubmitOrderComponent, CartTableComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  formControl = new FormControl();
  cart: CartItemDto[] = [];

  constructor(
    private readonly cartService: CartService,
    private readonly orderService: OrderService,
    private readonly router: Router
  ) {}

  onDeleteItem(index: number) {
    this.cartService.removeCartItem(index);
  }

  onClearCart() {
    alert('Clear Item Success');
    this.cartService.clearCartItem();
  }

  createOrder(data: SubmitCreateOrderForm) {
    const order = new OrderDto(data, this.cart);
    this.orderService.createOrder(new OrderDto(data, [...this.cart]));
    this.cartService.clearCartItem();
    alert('Order created: ' + order.id);
    this.router.navigate([`/order/${order.id}`]);
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart?.map((e, i) => ({ ...e, position: i }));
    });
  }
}
