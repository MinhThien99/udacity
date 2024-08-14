import { Component } from '@angular/core';
import { ProductDto } from '../../service/product.dto';
import { HttpService } from './../../service/http.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  products: ProductDto[] = [];
  product: ProductDto = {};
  constructor(
    private readonly HttpService: HttpService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.HttpService.getProducts().subscribe((data: ProductDto[]) => {
      this.products = data;
      this.product =
        data?.find(
          (e) => e.id === +this.activatedRoute?.snapshot?.params['id']
        ) || {};
    });
  }
}
