import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: '#app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private title = 'Telefon E-Ticaret';
  constructor(private http: HttpClient) {}

  getTitle() {
    return this.title;
  }
  createProduct() {
    const product = {
      id: 1,
      category: 1,
      name: 'Samsung 30',
      price: 3000,
      imageUrl: '1.jpeg',
      description: 'iyi telefon',
      isActive: true,
      categoryId: 1,
    };

    this.http
      .post(
        'https://ng-shopapp-3c12f-default-rtdb.firebaseio.com/products.json',
        product
      )
      .subscribe((result) => console.log(result));
  }
}
