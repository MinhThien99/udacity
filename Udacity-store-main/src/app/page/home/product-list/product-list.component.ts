import { Component, Input, OnInit } from '@angular/core';

import { ProductDto } from '../../../service/product.dto';
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, MatListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {}

  @Input() products: ProductDto[] = [];
}
