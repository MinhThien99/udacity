import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CartItemDto } from '../../../service/cart.dto';
import { CartService } from '../../../service/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart-table',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css',
})
export class CartTableComponent implements OnInit {
  constructor(
    private readonly cartService: CartService,
    private toastr: ToastrService
  ) {}
  totalPrice = '';
  @Input() showAction: boolean = true;
  displayedColumns: string[] = Boolean(this.showAction)
    ? ['position', 'name', 'price', 'quantity', 'total', 'action']
    : ['position', 'name', 'price', 'quantity', 'total'];
  @Input() cart: CartItemDto[] = [];

  onDeleteItem(index: number) {
    this.toastr.success('Delete Item cart successfully!', 'Notification');
    this.cartService.removeCartItem(index);
    const newCart = this.cart.filter((_, i) => i !== index);
    this.totalPrice = parseFloat(
      String(
        newCart.reduce((cur, nextObj) => {
          return cur + (nextObj.price || 0) * nextObj.quantity;
        }, 0)
      )
    ).toFixed(3);
  }

  onClearCart() {
    this.toastr.success('Clear Item cart successfully!', 'Notification');
    this.totalPrice = parseFloat('0').toFixed(3);
    this.cartService.clearCartItem();
  }

  ngOnInit(): void {
    this.totalPrice = parseFloat(
      String(
        this.cart.reduce((cur, nextObj) => {
          return cur + (nextObj.price || 0) * nextObj.quantity;
        }, 0)
      )
    ).toFixed(3);
    this.displayedColumns = Boolean(this.showAction)
      ? ['position', 'name', 'price', 'quantity', 'total', 'action']
      : ['position', 'name', 'price', 'quantity', 'total'];
  }
}
