import { Component, Input } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  template: `
  <h2>Products</h2>
  <div *ngFor="let product of products">
  <product [data] = "product"></product>
  </div>
  `,
  providers: [ProductService],
})
export class ProductsComponent {
  products;
  constructor(productservice: ProductService) {
    this.products = productservice.getProducts();
  }
}
