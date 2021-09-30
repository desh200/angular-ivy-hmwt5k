import { Component, Input } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  template: `
  <div>
  <h2>Products</h2>
  <div *ngIf="products.length > 0">
  <div *ngFor="let product of products">
  <product [data] = "product"></product>
  </div>
  </div>
  <div *ngIf="products.length == 0">
  No products to display
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
