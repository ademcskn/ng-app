import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent {
  private title = 'Telefon E-Ticaret';
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  getTitle() {
    return this.title;
  }
  createProduct() {
    const product = {
      id: 1,
      category: 1,
      name: 'Samsung 40',
      price: 3000,
      imageUrl: '2.jpeg',
      description: 'daha gelmeyen telefon',
      isActive: true,
      categoryId: 1,
    };

    this.productService
      .createProduct(product)
      .subscribe((result) => console.log(result));
  }
}
