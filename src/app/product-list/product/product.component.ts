import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {}

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
