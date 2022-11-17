import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productRepository: ProductRepository;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['categoryId']) {
        this.products = this.productRepository.getProductsbyCategoryId(
          params['categoryId']
        );
      } else {
        this.http
          .get<Product[]>(
            'https://ng-shopapp-3c12f-default-rtdb.firebaseio.com/products.json'
          )
          .subscribe((result) => {
            for (const key in result) {
              this.products.push({ ...result[key], id: key });
            }
          });
      }
    });
  }
}
