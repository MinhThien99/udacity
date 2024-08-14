import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductDto } from '../../../../service/product.dto';
import { CartService } from '../../../../service/cart.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  constructor(private readonly cartService: CartService, private toastr: ToastrService) {}
  @Input() product: ProductDto = new ProductDto();

  onClickAdd(): void {
    this.toastr.success('Add cart successfully!', 'Notification');
    this.cartService.addCart(this.product);
  }
}
